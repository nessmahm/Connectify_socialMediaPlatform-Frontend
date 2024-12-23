import { submit } from '../../services/api/requests';
import { getService } from '../../services/api/requests';
import { ViewStatusType } from '../Sign/SignUp';
import {RequestProps} from "../../Props/RequestProps";

export const RejectFriendRequest = async (
    recieverId: string,
    requestId: string,
    setRequests: React.Dispatch<React.SetStateAction<RequestProps[]>>,
    setStatus: (status: ViewStatusType) => void,
    setSuccessMessage: (message: string | undefined) => void,
    setErrorMessage: (message: string | undefined) => void,
    token: string,
) => {
    try {
        setStatus('loading')
        const service = getService('delete-a-friend-request');
        const bearerToken = 'Bearer ' + token;
        const request = service.buildRequest({recieverId},
            { Authorization: bearerToken})
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
        setRequests((requests: RequestProps[]) => requests.filter((request) => request.requestId !== requestId));

        setStatus('success');
        setSuccessMessage('Friend request rejected Successfully');
    } catch (e) {
        console.log(e)
    }
}