import React from 'react'
import '../../styles/elements.css'
import UserImage from "../../components/UserImage";
import FriendRequest from "./FriendRequest";
import {Link} from "react-router-dom";
//extract the friends from a given user
function FriendsElement({user}) {
    return (
        <div className={"friends"}>
           <span> Friends </span>
            <div className={"friends-wrapper"}>
                {user.friends && user.friends.map((friend) => (
                    <Link to={"/profil1/"+friend.id+"/"+friend.username}>
                        <UserImage img={friend.image} />
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default FriendsElement
