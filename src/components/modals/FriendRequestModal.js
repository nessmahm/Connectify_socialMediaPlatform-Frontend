import React, {useState} from 'react'
import FriendRequestElement from "../FriendRequest/FriendRequestElement";
const user = {"id":"123","username": "Emily", "userImage": "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png", "joinedDate": "May 2013", "userFriends": [1,2,3,1,1,1]}

function FriendRequestModal() {
    return (

        <div className={"modaal friendreq-modal"}>
           <FriendRequestElement />
        </div>
    )
}

export default FriendRequestModal
