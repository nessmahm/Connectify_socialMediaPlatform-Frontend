import { ViewStatusType } from '../../pages/Sign/SignUp';
import { IoOutput } from '../../services/api/io';
import { getService } from '../../services/api/requests';
import { PostData } from './Post';

export const addPost = async (
  data: PostData,
  setPosts: React.Dispatch<React.SetStateAction<PostData[]>>,
  setStatus: (status: ViewStatusType) => void,
  setErrorMessage: (message: string | undefined) => void,
  token: string
) => {
    try {
      setStatus('loading')
      const formData = new FormData();
      if (data?.file)
        {formData.append('file', data.file[0])}
      formData.append('content', data.content)
      const bearerToken = 'Bearer ' + token;
      const res  = await fetch(process.env.REACT_APP_BASE_API_URL+'/post/add', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: bearerToken,
      }})
      const response = await res.json() as IoOutput
      console.log('response', response);
      if (response.message || ! response || response.data?.status === 400) {
        setStatus("error")
        setErrorMessage(response.message)
        return false ;
      }
      setPosts((posts: PostData[]) => [response.data, ...posts])
      setStatus('success');
      return true;
    } catch (e) {
      console.log(e)
    }
};