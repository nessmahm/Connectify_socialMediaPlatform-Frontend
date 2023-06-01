import React from 'react'
import UserImage from "../../components/UserImage";
//get user by id
function FriendCard({user}) {
    return (
        <div className={"friendCard"}>
            <UserImage img={user.userImage}/>
            <span className={"userName"}>  {user.username}</span>
            <span>{user.joinedDate}</span>
            <span><strong>{user.userFriends.length} </strong> Friends </span>

        </div>
    )
}

export default FriendCard
