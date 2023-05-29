import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

function FriendRequestButton({state}) {
    const [isClicked, setIsClicked] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const notConnectedState = ['connect', 'send request'];
    const connectedState = ['friend', 'unfollow'];
    const requestSentState = ['request sent', 'cancel request'];
    const [text, setText] = useState(connectedState);
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

        <Button
            className="btn"
            variant="contained"
            color="primary"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            onClick={handleClick}
        >
            {isHovered? text[1] : text[0] }
        </Button>
    );
}

export default FriendRequestButton;
