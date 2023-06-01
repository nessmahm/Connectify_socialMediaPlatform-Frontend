import { PostData } from '../../components/Posts/Post';
import { PostedPostProps } from '../../components/Posts/PostedPostElement';
import { User } from '../../context/context';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';

export const requestAllPosts = async (
  userId: string,
  setPosts: (posts: PostedPostProps[]) => void,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (message: string | undefined) => void,
  token: string,
) => {
  try {
    if (!userId) {
      return;
    }
    setStatus('loading')
    const service = getService('get-all-posts');
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      userId
    }, { Authorization: bearerToken})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (response.message || ! response || response.data.status === 400) {
      setStatus("error")
      setErrorMessage(response.message)
      return;
    }
    setPosts(response.data  as PostedPostProps[])
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}