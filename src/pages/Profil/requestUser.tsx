import { User } from '../../context/context';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';

export const requestUser = async (
    profilId: string,
    userId: string,
    setUser: (user: User) => void,
    setUserState:(userState:string)=>void,
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
) => {
    try {
        if (!userId) {
            return;
        }
        console.log("profilId",profilId)
        console.log("userId",userId)
        setStatus('loading')
        const service = getService('get-user-by-id');
        const request = service.buildRequest({
           profilId,userId
        })
        if (!request) {
            setErrorMessage('Invalid request');
            return;
        }
        const response = await submit(request)
        console.log("res",response)
        if (!response ||response.message ||  response.data?.status === 400) {
            setStatus("error")
            setErrorMessage(response.message)
            return;
        }
        setUser(response.data?.user as User)
        setUserState(response.data?.userFriendship as string)
        setStatus('success');
    } catch (e) {
        console.log(e)
    }
}