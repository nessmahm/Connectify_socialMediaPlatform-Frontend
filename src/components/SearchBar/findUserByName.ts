import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';

export const findUserByName = async (
  name: string,
  token: string,
) => {
  try {
    const service = getService('find-user-by-name');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;
    const request = service.buildRequest({
      name,
    }, { Authorization: bearerToken})
    if (!request) {
      return -1;
    }
    const response = await submit(request)
    console.log("res",response)
    if (!response ||response.message ||  response.data?.status === 400) {
      return -1;
    }
    return response.data?.id || -1;
  } catch (e) {
    console.log(e)
  }
}