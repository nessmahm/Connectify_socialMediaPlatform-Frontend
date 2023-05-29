import React, {useState} from 'react'
import FriendRequest from "../pages/Friends/FriendRequest";
const user = {"id":"123","username": "Emily", "userImage": "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png", "joinedDate": "May 2013", "userFriends": [1,2,3,1,1,1]}

function FriendRequestModal() {
    const [friendRequests,setFriendRequests] = useState([])
    return (

        <div className={"modaal friendreq-modal"}>
            {   <>
                <FriendRequest user={user}/>
                <FriendRequest user={user}/>
                <FriendRequest user={user}/>
            </>


            }
            {
                <span>No Friend Request</span>
            }
        </div>
    )
}

export default FriendRequestModal
