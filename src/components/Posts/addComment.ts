import { PostedPostProps } from './PostedPostElement';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const addComment = async (
  content: string | undefined,
  postId: string | undefined,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (message: string | undefined) => void,
  token: string,
) => {
  try {
    const service = getService('add-comment');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      content
    }, { Authorization: bearerToken}, {postId})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (response.message) {
      setStatus("error")
      setErrorMessage(response.message)
      return;
    }
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}