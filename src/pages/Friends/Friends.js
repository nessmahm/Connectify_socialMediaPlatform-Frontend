import React, {useState} from 'react'
import FriendCard from "./FriendCard";
import '../../styles/friends.css'
import {Link} from "react-router-dom";
import FriendRequest from "./FriendRequest";
//return the friends of a givin user "logged "
//return the friends requests of a givin user "logged
function Friends({user}) {
    const [friends,setFriends] = useState([])

    return (
        <div className={"friends-page wrapper"}>
            <div className={"friendReq-section"} >
                <h3>Friend Request List </h3>
                {
                    user.friendRequests && user.friendRequests.map((friend) => (
                        <Link to={"/profil1/"+friend.id+"/"+friend.username}>
                            <FriendRequest user={friend}/>
                        </Link>
                    ))
                }
            </div>
            <div className={"friends-section"}>
                <h3>Friends List </h3>

                {user.friends && user.friends.map((friend) => (
                    <Link to={"/profil1/"+user.id+"/"+user.username}>
                        <FriendCard user={friend} />
                    </Link>
                    ))}

                    </div>

        </div>
    )
}

export default Friends
