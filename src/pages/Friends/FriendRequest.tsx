import React, {useContext, useEffect, useState} from 'react'
import UserImage from "../../components/UserImage";
import {Button} from "@mui/joy";
import {AcceptFriendRequest} from "./AcceptFriendRequest";
import {AuthContext} from "../../context/context";
import {Link} from "react-router-dom";
import Alert from "@mui/joy/Alert";
import { formatDistanceToNow } from 'date-fns';
import {RejectFriendRequest} from "./RejectFriendRequest";

function FriendRequest(props:any) {
    const {user,requestId,requestDate,setRequests,setRequestState,sent} = props;
    const { token, user: loggedInUser } = useContext(AuthContext);

    const [status, setStatus] = useState('normal');
    const [errorMessage, setErrorMessage] = useState('');


    const handleAccept = async() => {
        await AcceptFriendRequest(requestId,setRequests,setRequestState,setErrorMessage,token);
    }
    const handleReject = async() => {
        RejectFriendRequest(requestId,setRequests,setRequestState,setErrorMessage,token);

    }

    return (
        user &&
        <div className={"friend-request"}>


                    <UserImage img={user?.image} />
                    <Link  className={"notification"} to={"/profil/"+user?.id} key={user?.id}>
                        <span> <strong>{user?.username} </strong></span>
                        <span >{requestDate &&  formatDistanceToNow(new Date(requestDate), { addSuffix: true })}</span>

                    </Link>

            {sent===true && <button  className={"btn sign-btn1"} onClick={handleReject} >Cancel</button>}
            {sent === false && <>
                <button  className={"btn accept-btn"} onClick={handleAccept} ><strong>Accept</strong></button>
                <button  className={"btn reject-btn"} onClick={handleReject} >Reject</button>
            </>}


        </div>
    )
}

export default FriendRequest
