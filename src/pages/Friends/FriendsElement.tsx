import React from 'react'
import '../../styles/elements.css'
import UserImage from "../../components/UserImage";
import FriendRequest from "./FriendRequest";
import {Link} from "react-router-dom";
import {User} from "../../context/context";
//extract the friends from a given user

export type FriendsElementProps =  {
    friends: User[];
}
function FriendsElement(props:FriendsElementProps) {
    const  {friends} = props;
    return (
        <div className={"friends"}>
           <span> Friends </span>
            <div className={"friends-wrapper"}>
                {friends && friends.map((friend) => (
                   <> <Link  className={"element"}to={"/profil/"+friend.id}>
                        <UserImage img={friend.image} />
                       <span className={"user-name"}>{friend.username}</span>

                   </Link>
                    </>
                ))}

            </div>
        </div>
    )
}

export default FriendsElement
