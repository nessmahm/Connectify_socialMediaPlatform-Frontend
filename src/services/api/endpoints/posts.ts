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
    endpoint: '/post/get-by-user/:userId',
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
  {
    id: 'like-post',
    method: 'POST',
    endpoint: '/post/like/:postId',
    description: 'Like a post.',
    buildRequest: (data: any, headers) => ({
      serviceId: 'like-post',
      urlParams: {...data},
      headers,
    }),
  },
  {
    id: 'dislike-post',
    method: 'DELETE',
    endpoint: '/post/dislike/:postId',
    description: 'Dislike a post.',
    buildRequest: (data: any, headers) => ({
      serviceId: 'dislike-post',
      urlParams: {...data},
      headers,
    }),
  },
  {
    id: 'delete-comment',
    method: 'DELETE',
    endpoint: '/comment/delete/:commentId',
    description: 'Delete a comment.',
    buildRequest: (data: any, headers) => ({
      serviceId: 'delete-comment',
      urlParams: {...data},
      headers,
    }),
  },
  {
    id: 'delete-post',
    method: 'DELETE',
    endpoint: '/post/delete/:postId',
    description: 'Delete a post.',
    buildRequest: (data: any, headers) => ({
      serviceId: 'delete-post',
      urlParams: {...data},
      headers,
    }),
  },
];
export default definitions;