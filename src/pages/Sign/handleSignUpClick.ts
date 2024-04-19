import { submit, getService } from '../../services/api/requests';
import { ViewStatusType } from './SignUp';

export const handleSignUpClick = async (
  username: string | undefined,
  email: string | undefined,
  password: string | undefined,
  phoneNumber: number| undefined,
  gender: 'MALE' | 'FEMALE',
  setStatus?: (status: ViewStatusType | undefined) => void,
  setErrorMessage?: (message: string| undefined) => void,
  setSuccessMessage?: (message: string | undefined) => void,
) => {
  try {
    setStatus?.('loading')
    console.log('here')
    const service = getService('create-user');
    const request = service.buildRequest({
      username,
      phoneNumber,
      password,
      email,
      gender,
    });
    if (!request) {
      setErrorMessage?.('Invalid request');
      return;
    }
    const response = await submit(request)
    console.log("res",response)
    if ( !response ||response.message ||  response.data?.status === 400) {
      setStatus?.("error")
      setErrorMessage?.(response.message)
      return false;
    }
    setStatus?.('success');
    setSuccessMessage?.('User created successfully!');
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}