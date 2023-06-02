import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

function FriendRequestButton({state}) {
    const [isClicked, setIsClicked] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const notConnectedState = ['connect', 'send request'];
    const connectedState = ['friend', 'unfollow'];
    const requestSentState = ['request sent', 'cancel request'];
    const [text, setText] = useState( state =="connect" ? notConnectedState : state==="friend" ? connectedState : requestSentState);
    useEffect(()=> {},[text]
    )

    const handleClick = () => {

        switch (text[1]) {
            case "send request":
            {  setText(requestSentState);
                break; }
            case "cancel request":
            { setText(notConnectedState);
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
