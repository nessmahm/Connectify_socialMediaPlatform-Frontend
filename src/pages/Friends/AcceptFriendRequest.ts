import { User } from '../../context/context';
import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';
import {RequestProps} from "../../Props/RequestProps";

export const AcceptFriendRequest = async (
    requestId: string,
    setRequests: React.Dispatch<React.SetStateAction<RequestProps[]>>,
    setStatus: (status: ViewStatusType) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {

        setStatus('loading')
        const service = getService('accept-a-friend-request');
        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest({requestId},
            { Authorization: bearerToken})
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
        setRequests((requests: RequestProps[]) => requests.filter((request) => request.requestId !== requestId));
        setStatus('success');
    } catch (e) {
        console.log(e)
    }
}