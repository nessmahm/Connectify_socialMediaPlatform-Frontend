import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';
import {RequestProps} from "../../Props/RequestProps";

export const requestSentRequest = async (
    setFriendRequests: (friendRequests: RequestProps[]) => void,
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {

        setStatus('loading')
        const service = getService('get-all-sent-friend-requests');
        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest(
            { Authorization: bearerToken})
        if (!request) {
            setErrorMessage('Invalid request');
            return;
        }
        const response = await submit(request)
        console.log("res",response)
        if (!response ||response.message ||  response.data?.status === 400 ) {
            setStatus("error")
            setErrorMessage(response.message)
            return;
        }
        setFriendRequests(response.data as RequestProps[])

        setStatus('success');
    } catch (e) {
        console.log(e)
    }
}