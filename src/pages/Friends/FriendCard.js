import React from 'react'
import UserImage from "../../components/UserImage";
import {formatDate} from "../../Props/DateFormat"
function FriendCard({user}) {

    return (
        <div className={"friendCard"}>
            <UserImage img={user.image}/>
            <span className={"userName"}>  {user.username}</span>
            <span>{formatDate(user.createdAt)}</span>

        </div>
    )
}

export default FriendCard
