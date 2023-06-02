import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';

export const dislikePost = async (
  postId: string | undefined,
  setLiked: (like: boolean) => void,
  setNumberOfLikes: React.Dispatch<React.SetStateAction<number>>,
  setErrorMessage: (message: string | undefined) => void,
  token: string,
) => {
  try {
    const service = getService('dislike-post');
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
    if (response.message || ! response || response.data?.status === 400) {
      setErrorMessage(response.message)
      return;
    }
    setLiked(false)
    setNumberOfLikes((numberOfLikes) => numberOfLikes - 1);
  } catch (e) {
    console.log(e)
  }
}