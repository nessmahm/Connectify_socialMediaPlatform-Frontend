import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const RequestUnfollowFriendRequest = async (
    senderId: string,
    recieverId: string,
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {
        if (!senderId) {
            return;
        }
        setStatus('loading')
        const service = getService('reject-a-friend-request');
        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest({
            recieverId,senderId
        },{ Authorization: bearerToken})
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
        setStatus('success');
    } catch (e) {
        console.log(e)
    }
}