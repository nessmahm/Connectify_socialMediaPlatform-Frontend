import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';

export const handleSendFriendRequestClick = async (
  friendId: string,
  token: string | undefined
) => {
  try {
    const service = getService('send-friend-request');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      reciever_id: friendId,
    }, { Authorization: bearerToken})
    if (!request) {
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (!response ||response.message ||  response.data?.status === 400) {
      return;
    }
  } catch (e) {
    console.log(e)
  }
}