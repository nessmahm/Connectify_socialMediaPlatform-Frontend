import { PostData } from '../../../components/Posts/Post';
import { ServiceDefinition } from '../requests';

const definitions: ServiceDefinition[] = [
  {
    id: 'add-post',
    method: 'POST',
    endpoint: '/post/add',
    description: 'Add a post',
    buildRequest: (data: PostData, headers: any) => ({
      serviceId: 'add-post',
      body: { ...data },
      headers,
    }),
  },
  {
    id: 'get-all-posts',
    method: 'GET',
    endpoint: '/user/posts/:userId',
    description: 'Get all posts of a user',
    buildRequest: (data: any, headers) => ({
      serviceId: 'get-all-posts',
      headers,
      urlParams: {...data},
    }),
  },
  {
    id: 'add-comment',
    method: 'POST',
    endpoint: 'comment/add/:postId',
    description: 'Add a comment to a post',
    buildRequest: (data: any, headers, params) => ({
      serviceId: 'add-comment',
      body: { ...data },
      headers,
      urlParams: {...params},
    }),
  },
];
export default definitions;