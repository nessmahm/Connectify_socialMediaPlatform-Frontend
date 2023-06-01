import { ServiceDefinition } from '../requests';

export type createUserRequestData = {
  username: string;

  phoneNumber: string;

  gender: 'MALE' | 'FEMALE';

  email: string;

  password: string;
};

export const definitions: ServiceDefinition[] = [
  {
    id: 'delete-user',
    method: 'DELETE',
    endpoint: '/user/delete/:userId',
    description: 'Delete a user',
    buildRequest: (data: any) => ({
      serviceId: 'delete-user',
      urlParams: { ...data },
    }),
  },
  {
    id: 'get-user-by-id',
    method: 'GET',
    endpoint: '/user/findone/:userId',
    description: 'Retrieve a user.',
    buildRequest:(data:any,headers) => ({
      serviceId: 'get-user-by-id',
      urlParams: { ...data },
      headers
    })
  },
  {
    id: 'create-user',
    method: 'POST',
    endpoint: '/user',
    buildRequest: (data: createUserRequestData) => ({
      serviceId: 'create-user',
      body: { ...data },
    })
  },
  {
    id: 'sign-in',
    method: 'POST',
    endpoint : '/user/login',
    buildRequest: (data: any) => ({
      serviceId: 'sign-in',
      body: { ...data },
    }),
  },
  {
    id: 'get-all-users',
    method : 'GET',
    endpoint: '/user/non-friends-users',
    buildRequest: (headers) => ({
      serviceId: 'get-all-users',
      headers,
    }),
  },
];
export default definitions;