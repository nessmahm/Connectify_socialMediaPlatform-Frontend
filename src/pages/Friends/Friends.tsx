import React, {useContext, useEffect, useState} from 'react'
import FriendCard from "./FriendCard";
import '../../styles/friends.css'
import {Link} from "react-router-dom";
import {AuthContext, User} from "../../context/context";
import {requestAllFriends} from "../Profil/requestAllFriends";
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";
import Alert from "@mui/joy/Alert";
import FriendRequestElement from "../../components/FriendRequest/FriendRequestElement";

//return the friends of a givin user "logged "
//return the friends requests of a givin user "logged
function Friends() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [friends, setFriends] = useState<User[]>([]);
    const [status, setStatus] = useState('normal');
    const [errorMessage, setErrorMessage] = useState('');
    const [page, setPage] = useState(1);
    console.log("setPage",setPage)

    useEffect(() => {
        requestAllFriends(loggedInUser?.id, setFriends, setStatus, setErrorMessage, token);

    }, [loggedInUser,page]);
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
          <div className={"same-row"}>
              <h3>Friend Request List </h3>
             <Link to='/sent-requests'> <span> Sent Requests </span> </Link>
          </div>
                <FriendRequestElement />


        </div>
            <div className={"users-section"}>
                <h3>Friends List </h3>

                {friends.length>0 ?
                (friends.map((friend) => (
                    <Link to={"/profil/"+friend.id} key={friend.id}>
                        <FriendCard user={friend}  />
                    </Link>
                )))
                :
                <p className={"noFriends-message"}> You Don't Have Friends Yet. Go Make Some :)  </p>
                }



            </div>
            </>
            }

        </div>
    )
}

export default Friends
