import { CommentType } from './PostedPostElement';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const addComment = async (
  content: string | undefined,
  postId: string | undefined,
  setPostComments: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>,
  setNumberOfComments: React.Dispatch<React.SetStateAction<number>>,
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
    if (!response ||response.message ||  response.data?.status === 400) {
      setStatus("error")
      setErrorMessage(response?.message || response?.data.message)
      return;
    }
    setPostComments((comments) => ([...comments,response.data as CommentType]));
    setNumberOfComments((numberOfComments) => numberOfComments + 1);
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}