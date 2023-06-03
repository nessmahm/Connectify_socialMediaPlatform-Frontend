import { ServiceDefinition } from '../requests';

export type createUserRequestData = {
  username: string;

  phoneNumber: string;

  gender: 'MALE' | 'FEMALE'| 'OTHER';

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
    endpoint: '/user/findone/:profilId/:userId',
    description: 'Retrieve a user.',
    buildRequest:(data:any) => ({
      serviceId: 'get-user-by-id',
      urlParams: { ...data },
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
    buildRequest: (data:any,headers) => ({
      serviceId: 'get-all-users',
      queryParams: { ...data },
      headers
    }),
  },
  {
    id: 'find-user-by-name',
    method: 'GET',
    endpoint: '/user/findbyname/:name',
    buildRequest: (data: any) => ({
      serviceId: 'find-user-by-name',
      urlParams: { ...data },
    }),
  },
];
export default definitions;