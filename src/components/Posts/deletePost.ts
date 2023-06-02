import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { PostedPostProps } from './PostedPostElement';
import { CommentType } from './PostedPostElement';

export const deletePost = async (
  postId: string,
  setPosts: React.Dispatch<React.SetStateAction<PostedPostProps[]>>,
  setStatus: (status: string) => void,
  setSuccessMessage: (message: string | undefined) => void,
  setErrorMessage: (message: string | undefined) => void,
  token: string,
) => {
  try {
    setStatus('loading');
    const service = getService('delete-post');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      postId
    }, { Authorization: bearerToken})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (response.message || !response || response.data?.status === 400) {
      setStatus("error")
      setErrorMessage(response?.message || response?.data.message)
      return;
    }
    setPosts((posts) => posts.filter((post) => post.id !== postId));
    setSuccessMessage('Post deleted successfully!');
    setStatus('success');
} catch (e) {
    setErrorMessage('Unexpected error')
    setStatus('error')
    console.log(e)
  }
}