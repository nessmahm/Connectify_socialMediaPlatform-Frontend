import React from 'react'
import UserImage from "../../components/UserImage";
import {Button} from "@mui/joy";

function FriendRequest({user}) {
    return (
        <div className={"friend-request"}>
            <UserImage />
            <div className={"notification"}>
                <span> <strong>{user.username} </strong></span>
                <span>{user.joinedDate}</span>
            </div>
               <Button   color="success"variant="contained"><strong>Accept</strong></Button>
               <Button  color="secondary" variant="outlined">Reject</Button>
        </div>
    )
}

export default FriendRequest
