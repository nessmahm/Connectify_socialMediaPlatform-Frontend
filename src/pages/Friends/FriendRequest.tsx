import React, {useContext, useState} from 'react'
import UserImage from "../../components/UserImage";
import {AcceptFriendRequest} from "./AcceptFriendRequest";
import {AuthContext} from "../../context/context";
import {Link} from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import {RejectFriendRequest} from "./RejectFriendRequest";

function FriendRequest(props:any) {
    const {user,requestId,requestDate,setRequests,setRequestState,sent, setSuccessMessage} = props;
    const { token, } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');
    console.log("errorMessage",errorMessage)

    const handleAccept = async() => {
        await AcceptFriendRequest(requestId,setRequests,setRequestState,setSuccessMessage,setErrorMessage,token);
    }
    const handleReject = async() => {

        console.log("Reject: ",requestId)
        RejectFriendRequest(user?.id,requestId,setRequests,setRequestState,setSuccessMessage,setErrorMessage,token);

        // eslint-disable-next-line no-restricted-globals
        location.reload();

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
