import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../../pages/Sign/SignUp';

export const requestDeleteFriendRequest = async (
    recieverId: string,
    setText:(Text: string[]) => void,
    btnText : string[],
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {
        if (!recieverId) {
            return;
        }
        setStatus('loading')
        const service = getService('delete-a-friend-request');
        if (!service) {
            setErrorMessage('Invalid service');

        }

        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest({
            recieverId,
        },{ Authorization: bearerToken})
        if (!request) {
            setErrorMessage('Invalid request');
            return;
        }
        const response = await submit(request)
        console.log("res",response)
        if (response.message || !response || response.data?.status === 400) {
            setStatus("error")
            setErrorMessage(response.message)
            return;
        }
        setStatus('success');
        setText(btnText);

    } catch (e) {
        console.log(e)
    }
}