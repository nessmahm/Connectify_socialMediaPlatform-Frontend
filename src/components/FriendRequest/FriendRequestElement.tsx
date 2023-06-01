import React, {useContext, useEffect, useState} from 'react'
import Alert from "@mui/joy/Alert";
import FriendRequest from "../../pages/Friends/FriendRequest";
import {RequestProps} from "../../Props/RequestProps";
import {requestAllFriends} from "../../pages/Profil/requestAllFriends";
import {requestAllFriendRequests} from "../../pages/Friends/requestAllFriendsRequests";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {AuthContext} from "../../context/context";
import {ViewStatusType} from "../../pages/Sign/SignUp";

function FriendRequestElement() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [friendRequests, setFriendRequests] = useState<RequestProps[]>([]);
    const [status, setStatus] = useState('normal');
    const [RequestState, setRequestState] = useState<ViewStatusType>();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        requestAllFriendRequests( setFriendRequests, setStatus, setErrorMessage, token);

    }, [loggedInUser]);
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div>
            {
                RequestState === 'success'  &&
                <Alert
                    color="success"
                    size="md"
                    variant="soft"
                    className={"signIn-error"}
                >Friend Added Succefully </Alert>
            }

            {friendRequests && friendRequests?.length > 0 ?
              (
                friendRequests.map((request) => (
                  <FriendRequest user={request.sender} requestId={request.requestId} setRequests={setFriendRequests}
                                 setRequestState={setRequestState} requestDate={request.requestDate}
                                 key={request.requestId}/>

                ))
              ) :

              (
                <span> No friend requests </span>
              )
            }

        </div>
    )
}

export default FriendRequestElement
