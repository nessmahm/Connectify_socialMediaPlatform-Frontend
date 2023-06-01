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
                   <> <Link to={"/profil1/"+friend.id+"/"+friend.username}>
                        <UserImage img={friend.image} />
                    </Link>
                    <span>{friend.username}</span>
                    </>
                ))}

            </div>
        </div>
    )
}

export default FriendsElement
