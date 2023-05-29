import React from 'react'
import '../../styles/elements.css'
import UserImage from "../../components/UserImage";

function FriendsElement() {
    return (
        <div className={"friends"}>
           <span> Friends </span>
            <div className={"friends-wrapper"}>
                <UserImage/>
                <UserImage/>
                <UserImage/>
                <UserImage/>

            </div>
        </div>
    )
}

export default FriendsElement
