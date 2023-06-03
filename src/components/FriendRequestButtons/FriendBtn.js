import React, {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {AuthContext} from "../../context/context";
import {handleSendFriendRequest} from "./handleSendFriendRequest";
import {requestDeleteFriendRequest} from "./handleDeleteFriendRequest";

function FriendRequestButton(props) {
    const {state,userId } = props;
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [status, setStatus] = useState('normal');
    const [isClicked, setIsClicked] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const notConnectedState = ['connect', 'send request'];
    const connectedState = ['friend', 'unfollow'];
    const requestSentState = ['request sent', 'cancel request'];
    const requestrecievedState = ['request recieved', 'response'];
    const [text, setText] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        setText(state =="notFriend" ? notConnectedState : state==="friend" ? connectedState : state==="recievedRequest" ? requestrecievedState : requestSentState)
        },[userId]
    )

    const handleClick = () => {
        switch (text[1]) {
            case "send request":
            {
                setStatus('normal')
                handleSendFriendRequest(loggedInUser?.id, userId,setText,requestSentState,setStatus,setErrorMessage,token);

                break;
            }
            case "cancel request":
            {  setStatus('normal')
                console.log("userId",userId)
                requestDeleteFriendRequest(userId,setText,notConnectedState,setStatus,setErrorMessage,token);

                break; }
            case "unfollow":
            { setText(notConnectedState);
                break; }
                case "response":{
                    window.location.href = '/friends';
                }

    }}



    return (
        <div className={"friend-btn"}>

            {text && (
                <Button
            className= {text[0] ==="request sent" ? "btn friend-btn request-sent-btn" : "btn friend-btn" }
            variant="contained"
            color="primary"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            onClick={handleClick}
        >
            {isHovered? text[1] : text[0] }
        </Button>)}
        </div>
    );
}

export default FriendRequestButton;
