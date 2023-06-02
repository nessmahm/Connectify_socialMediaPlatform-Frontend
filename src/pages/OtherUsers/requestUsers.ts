import { User } from '../../context/context';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';

export const requestUsers = async (
    userId: string ,
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (value: string | undefined) => void,
    token: string,
) => {
  try {
    setStatus('loading');
    const service = getService('get-all-users');
    if (!service) {
      throw Error('invalid service');
    }
    const bearerToken = 'Bearer ' + token;

    const request = service.buildRequest({userId},{ Authorization: bearerToken})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (response.message || !response || response.data.status === 400) {
      setStatus("error")
      setErrorMessage(response.message)
      return;
    }
    setUsers(response.data as User[])
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}