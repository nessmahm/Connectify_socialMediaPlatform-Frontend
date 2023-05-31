import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';

export const handleSignInClick = async (
  login: string | undefined,
  password: string | undefined,
  setToken: (jwtToken: string) => void,
  setStatus: (status: string | undefined) => void,
  setErrorMessage: (message: string| undefined) => void,
) => {
  try {
    setStatus('loading')
    const service = getService('sign-in');
    const request = service.buildRequest({
      password,
      login,
    });
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
    setToken(response.data.access_token)
    setStatus('success');
  } catch (e) {
    console.log(e)
  }
}
