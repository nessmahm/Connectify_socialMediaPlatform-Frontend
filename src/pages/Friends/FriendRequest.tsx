import React, {useContext, useEffect, useState} from 'react'
import UserImage from "../../components/UserImage";
import {Button} from "@mui/joy";
import {AcceptFriendRequest} from "./AcceptFriendRequest";
import {AuthContext} from "../../context/context";
import {Link} from "react-router-dom";
import Alert from "@mui/joy/Alert";
import { formatDistanceToNow } from 'date-fns';

function FriendRequest(props:any) {
    const {user,requestId,requestDate,setRequests,setRequestState} = props;
    const { token, user: loggedInUser } = useContext(AuthContext);

    const [status, setStatus] = useState('normal');
    const [errorMessage, setErrorMessage] = useState('');


    const handleAccept = async() => {
        AcceptFriendRequest(requestId,setRequests,setRequestState,setErrorMessage,token);

    }

    return (
        <div className={"friend-request"}>


                    <UserImage img={user.image} />
                    <Link  className={"notification"} to={"/profil/"+user.id} key={user.id}>
                        <span> <strong>{user.username} </strong></span>
                        <span>{ formatDistanceToNow(new Date(requestDate), { addSuffix: true })}</span>

                    </Link>


                    <Button  className={"btn"} onClick={handleAccept} ><strong>Accept</strong></Button>
                    <Button  className={"btn"} >Reject</Button>

        </div>
    )
}

export default FriendRequest
