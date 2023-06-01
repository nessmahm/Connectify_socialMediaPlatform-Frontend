import { submit, getService } from '../../services/api/requests';
import { ViewStatusType } from './SignUp';

export const handleSignUpClick = async (
  username: string | undefined,
  email: string | undefined,
  password: string | undefined,
  phoneNumber: number| undefined,
  gender: 'MALE' | 'FEMALE',
  setStatus: (status: ViewStatusType | undefined) => void,
  setErrorMessage: (message: string| undefined) => void,
  setSuccessMessage: (message: string | undefined) => void,
) => {
  try {
    setStatus('loading')
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
    setStatus('success');
    setSuccessMessage('User created successfully!');
  } catch (e) {
    console.log(e)
  }
}