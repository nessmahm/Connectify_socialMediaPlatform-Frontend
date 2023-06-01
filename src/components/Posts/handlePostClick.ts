import { ViewStatusType } from '../../pages/Sign/SignUp';
import { IoOutput } from '../../services/api/io';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { PostData } from './Post';

export const addPost = async (
  data: PostData,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (message: string | undefined) => void,
  token: string
) => {
    try {
      setStatus('loading')
      const service = getService('add-post');
      const formData = new FormData();
      console.log('data', data.file[0])
      formData.append('file', data.file[0])
      formData.append('content', data.content)
      formData.append('test', 'heyy')
      const bearerToken = 'Bearer ' + token;
      const res  = await fetch(process.env.REACT_APP_BASE_API_URL+'/post/add', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: bearerToken,
      }})
      const response = await res.json() as IoOutput
      console.log('response', response);
      if (response.message) {
        setStatus("error")
        setErrorMessage(response.message)
        return;
      }
      setStatus('success');
    } catch (e) {
      console.log(e)
    }
};