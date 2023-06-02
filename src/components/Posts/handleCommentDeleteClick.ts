import { ViewStatusType } from '../../pages/Sign/SignUp';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { CommentStatusMap } from './PostedPostElement';

export const handleCommentDeleteClick = async (
  commentId: string | undefined,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (value: string | undefined) => void,
  setSuccessMessage: (value: string | undefined) => void,
  setNumberOfComments: React.Dispatch<React.SetStateAction<number>>,
  setCommentStatusMap: React.Dispatch<React.SetStateAction<CommentStatusMap>>,
  token: string,
) => {
  try {
    const service = getService('delete-comment');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      commentId
    }, { Authorization: bearerToken})
    if (!request) {
      setStatus('error');
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (response.message || !response || response.data?.status === 400) {
      setErrorMessage(response?.message)
      return;
    }
    setCommentStatusMap((map) => ({[commentId]: 'deleted', ...map}));
    setNumberOfComments((numberOfComments) => numberOfComments - 1);
    setStatus('success');
    setSuccessMessage('Comment Deleted Successfully!')
  } catch (e) {
    console.log(e)
  }
}