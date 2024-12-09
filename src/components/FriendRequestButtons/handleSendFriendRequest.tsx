import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const handleSendFriendRequest = async (
    senderId: string,
    recieverId: string,
    setText:(Text: string[]) => void,
    btnText : string[],
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {
        if (!senderId) {
            return false;
        }
        setStatus('loading')
        const service = getService('send-friend-request');
        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest({
            recieverId,senderId
        },{ Authorization: bearerToken})
        if (!request) {
            setErrorMessage('Invalid request');
            return false;
        }
        const response = await submit(request)
        console.log("res",response)
        if (response.message || !response || response.data?.status === 400) {
            setStatus("error")
            setErrorMessage(response.message)
            return false;
        }
        setStatus('success');
        setText(btnText);
        return true

    } catch (e) {
        console.log(e)
    }
}