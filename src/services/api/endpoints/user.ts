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
    id: 'get-all-users',
    method: 'GET',
    endpoint: '/user',
    description: 'Get all users',
    buildRequest: () => ({
      serviceId: 'get-all-users',
    }),
  },
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
];
export default definitions;