import { serviceBaseUrl } from './config';
import { IoOutput } from './io';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type ServiceRequestAttributes = {
  [key: string | symbol]: string | number | boolean
};

export type ServiceRequest = {
  serviceId: string,
  body?: object;
  headers?: ServiceRequestAttributes;
  urlParams?: ServiceRequestAttributes;
  queryParams?: ServiceRequestAttributes;
};

export type ServiceResponse = IoOutput;

export type ServiceDefinition = {
  id: string;
  description?: string,
  endpoint: string,
  method: HttpMethod,
  buildRequest: (
    data: any,
    headers?: ServiceRequestAttributes,
    params?: ServiceRequestAttributes,
  ) => ServiceRequest | undefined;
};

export const allServices: { [key: string]: ServiceDefinition } = {
};

export const registerService = (serviceDefinition: ServiceDefinition) => {
  const id = serviceDefinition?.id;
  if (!id) {
    throw Error('registerService - Invalid service id passed.');
  }

  if (allServices[id]) {
    throw Error(`registerService - Duplicate service registration - ${id}`);
  }

  allServices[id] = serviceDefinition;
};

export const getService = <D extends ServiceDefinition>(id: string): (D | undefined) => {
  if (id && allServices[id]) {
    return allServices[id] as D;
  }
};

const serviceBaseUrlWithoutTrailingSlashes = serviceBaseUrl.replace(/[/\\]*$/, '');

export const getServiceUrl = (
  endpoint: string,
  urlParams?: ServiceRequestAttributes,
  queryParams?: ServiceRequestAttributes,
) => {
  const endpointWithNoLeadingSlashes = endpoint.replace(/^[/\\]*/, '');
  const serviceUrl = `${serviceBaseUrlWithoutTrailingSlashes}/${endpointWithNoLeadingSlashes}`;
  let updatedServiceUrl = serviceUrl;

  if (urlParams) {
    const paramNames = Object.keys(urlParams);
    for (let paramNameIndex = 0; paramNameIndex < paramNames.length; paramNameIndex += 1) {
      const paramName = paramNames[paramNameIndex];
      const value = urlParams[paramName];
      const paramNameToReplace = `:${paramName}`;
      updatedServiceUrl = updatedServiceUrl.replace(paramNameToReplace, `${value}`);
    }
  }

  if (queryParams) {
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    if (queryString && queryString !== '') {
      return `${updatedServiceUrl}?${queryString}`;
    }
  }

  return updatedServiceUrl;
};

export const submit = async (request: ServiceRequest): Promise<ServiceResponse> => {
  const serviceDefinition = getService(request.serviceId);
  if (!serviceDefinition) {
    throw Error('Invalid service request passed - No matching service definition exists.');
  }

  const {
    headers,
    body,
    urlParams,
    queryParams,
  } = request;

  const { endpoint, method } = serviceDefinition;
  const url = getServiceUrl(endpoint, urlParams, queryParams);

  const requestConfig: RequestInit = {
    method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  let payload: any;
  try {
    console.log('url',url)
    console.log('requestConfig',requestConfig)
    const response = await fetch(url, requestConfig);
    const contentType = response.headers.get('content-type');
    const responseText = await response.text();
    if (responseText) {
      if (contentType?.toLowerCase().includes('application/json')) {
        payload = JSON.parse(responseText);
      } else {
        payload = responseText;
      }
    } else {
      // When the response does not have body (example: no content response),
      // Set payload to empty object.
      payload = {
        success: response.ok,
        status: response.status,
      };
    }
  } catch (error) {
    payload = undefined;
  }

  /*if (!isValidServiceResponse(payload)) {
    throw new Error('Invalid server response!');
  }*/

  return payload as ServiceResponse;
};
