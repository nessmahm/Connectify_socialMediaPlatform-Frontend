import { PostData } from '../../components/Posts/Post';
    import { PostedPostProps } from '../../components/Posts/PostedPostElement';
    import { User } from '../../context/context';
    import { submit } from '../../services/api/requests';
    import { getService } from '../../services/api/requests';
    import { ViewStatusType } from '../Sign/SignUp';

    export const requestAllFriends = async (
        userId: string,
        setFriends: (friends: User[]) => void,
        setStatus: (status: ViewStatusType) => void,
        setErrorMessage: (message: string | undefined) => void,
        token: string,
    ) => {
        try {
            if (!userId) {
                return;
            }
            setStatus('loading')
            const service = getService('get-all-user-friends');
            const bearerToken = 'Bearer ' + token;
            const request = service.buildRequest({
                userId
            }, { Authorization: bearerToken})
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
            setFriends(response.data as User[])
            setStatus('success');
        } catch (e) {
            console.log(e)
        }
    }