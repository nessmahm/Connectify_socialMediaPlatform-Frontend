import React, {useContext, useEffect, useState} from 'react'
import FriendCard from "./FriendCard";
import '../../styles/friends.css'
import {Link} from "react-router-dom";
import FriendRequest from "./FriendRequest";
import {AuthContext, User} from "../../context/context";
import {requestAllFriends} from "../Profil/requestAllFriends";
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";
import {requestAllFriendRequests} from "./requestAllFriendsRequests";
import Alert from "@mui/joy/Alert";
import {RequestProps} from "../../Props/RequestProps";
import {ViewStatusType} from "../Sign/SignUp";
import FriendRequestElement from "../../components/FriendRequest/FriendRequestElement";
//return the friends of a givin user "logged "
//return the friends requests of a givin user "logged
function Friends() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [friends, setFriends] = useState<User[]>([]);
    const [status, setStatus] = useState('normal');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        requestAllFriends(loggedInUser?.id, setFriends, setStatus, setErrorMessage, token);

    }, [loggedInUser]);
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div className={"friends-page wrapper"}>
            {status === 'error' && errorMessage ?
                 <Alert
                color="danger"
                size="md"
                variant="soft"
                className={"signIn-error"}
            >{errorMessage} </Alert>

            :
                <>

            <div className={"friendReq-section"} >
            <h3>Friend Request List </h3>
                <FriendRequestElement />


        </div>
            <div className={"friends-section"}>
                <h3>Friends List </h3>

                {friends && friends.map((friend) => (
                    <Link to={"/profil/"+friend.id} key={friend.id}>
                        <FriendCard user={friend}  />
                    </Link>
                ))}
                {
                    !friends && <span> No Friends Yet </span>
                }
            </div>
            </>
            }

        </div>
    )
}

export default Friends
