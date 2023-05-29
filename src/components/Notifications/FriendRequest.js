import React from 'react'
import UserImage from "../UserImage";
import {Button} from "@mui/joy";

function FriendRequest({userName,date}) {
    return (
        <div className={"friend-request"}>
            <UserImage/>
            <div className={"notification"}>
                <span><strong>{userName} </strong></span>
                <span>{date}</span>
            </div>
               <Button   color="success"variant="contained"><strong>Accept</strong></Button>
               <Button  color="secondary" variant="outlined">Reject</Button>
        </div>
    )
}

export default FriendRequest
