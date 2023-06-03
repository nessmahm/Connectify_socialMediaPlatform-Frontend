import { User } from '../../context/context';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';

export const requestUsers = async (
    page:number,
    setTotalPages: (totalPages: number) => void,
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

    const request = service.buildRequest({page},{ Authorization: bearerToken})
    if (!request) {
      setErrorMessage('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if (!response || response.message  || response.data?.status === 400) {
      setStatus("error")
      setErrorMessage(response?.message)
      return;
    }
    setUsers(response.data?.users as User[])
    setTotalPages(response.data?.totalPages as number)

    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}