import { ServiceDefinition } from '../requests';

const definitions: ServiceDefinition[] = [
  {
    id: 'add-post',
    method: 'POST',
    endpoint: '/post',
    description: 'Add a post',
    buildRequest: (data: any) => ({
      serviceId: 'add-post',
      body: { ...data },
    }),
  },
];
export default definitions;