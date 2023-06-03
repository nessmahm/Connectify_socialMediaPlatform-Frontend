import React, {useContext, useEffect, useState} from 'react'
import Alert from "@mui/joy/Alert";
import FriendRequest from "../../pages/Friends/FriendRequest";
import {RequestProps} from "../../Props/RequestProps";

import {requestSentRequest} from "../../pages/Friends/requestSentRequest";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {AuthContext} from "../../context/context";
import {ViewStatusType} from "../../pages/Sign/SignUp";
import '../../styles/friends.css'

function FriendRequestElement() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [friendRequests, setFriendRequests] = useState<RequestProps[]>([]);
    const [status, setStatus] = useState('normal');
    const [RequestState, setRequestState] = useState<ViewStatusType>();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        requestSentRequest( setFriendRequests, setStatus, setErrorMessage, token);

    }, [loggedInUser]);
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div className={"friends-page friend-request-page "}>

            {
                RequestState === 'success'  &&
                <Alert
                    color="success"
                    size="md"
                    variant="soft"
                    className={"signIn-error"}
                >Friend Request Removed Successfully </Alert>
            }

            <div className={"friendReq-section"}>
                {friendRequests && friendRequests.length > 0 ?
                    (
                        friendRequests.map((request) => (
                            <FriendRequest user={request.reciever} requestId={request?.requestId} setRequests={setFriendRequests}
                                           setRequestState={setRequestState} requestDate={request?.requestDate}
                                           key={request.requestId} sent={true}/>

                        ))
                    ) :

                    (
                        <span> No friend requests </span>
                    )
                }
            </div>

        </div>
    )
}

export default FriendRequestElement
