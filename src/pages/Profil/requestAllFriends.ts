import { PostData } from '../../components/Posts/Post';
    import { PostedPostProps } from '../../components/Posts/PostedPostElement';
    import { User } from '../../context/context';
    import { submit } from '../../services/api/requests';
    import { getService } from '../../services/api/requests';
    import { ViewStatusType } from '../Sign/SignUp';
import {FriendElementProps} from "../Friends/FriendsElement";

    export const requestAllFriends = async (
        userId: string,
        setFriends: (friends: FriendElementProps[]) => void,
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
            if (response.message) {
                setStatus("error")
                setErrorMessage(response.message)
                return;
            }
            setFriends(response.data.friends as FriendElementProps[])
            setStatus('success');
        } catch (e) {
            console.log(e)
        }
    }