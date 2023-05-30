import { ServiceDefinition } from '../requests';

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
    endpoint: 'user/:userId',
    description: 'Retrieve a user.',
    buildRequest:(data:any) => ({
      serviceId: 'get-user-by-id',
      urlParams: { ...data },
    })
  }
];
export default definitions;