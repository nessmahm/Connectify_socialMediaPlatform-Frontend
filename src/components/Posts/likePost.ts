import { PostedPostProps } from './PostedPostElement';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const likePost = async (
  postId: string | undefined,
  setLiked: (like: boolean) => void,
  setNumberOfLikes: React.Dispatch<React.SetStateAction<number>>,
  setErrorMessage: (message: string | undefined) => void,
  token: string,
) => {
  try {
    const service = getService('like-post');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      postId
    }, { Authorization: bearerToken}, {postId})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (!response ||response.message ||  response.data?.status === 400) {
      setErrorMessage(response.message)
      return;
    }
    setLiked(true)
    setNumberOfLikes((numberOfLikes) => numberOfLikes + 1);
  } catch (e) {
    console.log(e)
  }
}