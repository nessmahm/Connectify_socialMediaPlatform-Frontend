import React, {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {AuthContext} from "../../context/context";
import {hundelSendFriendRequest} from "./hundelSendFriendRequest";
import {requestDeleteFriendRequest} from "./hundelDeleteFriendRequest";

function FriendRequestButton(props) {
    const {state,userid} = props;
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [status, setStatus] = useState('normal');
    const [isClicked, setIsClicked] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const notConnectedState = ['connect', 'send request'];
    const connectedState = ['friend', 'unfollow'];
    const requestSentState = ['request sent', 'cancel request'];
    const [text, setText] = useState( state =="connect" ? notConnectedState : state==="friend" ? connectedState : requestSentState);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        console.log("token",token)
        },[text,token,status]
    )

    const handleClick = () => {

        switch (text[1]) {
            case "send request":
            {
                setStatus('normal')
                hundelSendFriendRequest(loggedInUser?.id, userid,setText,requestSentState,setStatus,setErrorMessage,token);

                break;
            }
            case "cancel request":
            {  setStatus('normal')
                requestDeleteFriendRequest(loggedInUser?.id, userid,setText,notConnectedState,setStatus,setErrorMessage,token);

                break; }
            case "unfollow":
            { setText(notConnectedState);
                break; }
    }}



    return (
        <div className={"friend-btn"}>

        <Button
            className= {text[0] ==="request sent" ? "btn friend-btn request-sent-btn" : "btn friend-btn" }
            variant="contained"
            color="primary"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            onClick={handleClick}
        >
            {isHovered? text[1] : text[0] }
        </Button>
        </div>
    );
}

export default FriendRequestButton;
