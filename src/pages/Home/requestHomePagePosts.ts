import { PostedPostProps } from '../../components/Posts/PostedPostElement';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';

export const requestHomePagePosts = async (
  setPosts: React.Dispatch<React.SetStateAction<PostedPostProps[][]>>,
  setStatus: React.Dispatch<React.SetStateAction<ViewStatusType>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  token: string
) => {
  try {
    setStatus('loading')
    const service = getService('request-home-page-posts');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({ Authorization: bearerToken})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (!response ||response.message ||  response.data?.status === 400) {
      setStatus("error")
      setErrorMessage(response?.message || response?.data.message)
      return;
    }
    setPosts(response.data as PostedPostProps[][])
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}