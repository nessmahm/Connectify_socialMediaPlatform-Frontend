import React from 'react'
import UserImage from "./UserImage";

function Notification({userName,action,date}) {
    return (
        <div className={"notification"}>
            <UserImage/>
            <div>
                <span><strong>{userName} </strong>
                    {action}</span>
                <span>{date}</span>
            </div>

        </div>
    )
}

export default Notification
