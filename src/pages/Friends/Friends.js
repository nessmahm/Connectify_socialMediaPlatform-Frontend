import React, {useState} from 'react'
import FriendCard from "./FriendCard";
import '../../styles/friends.css'
import {Link} from "react-router-dom";
import FriendRequest from "./FriendRequest";
function Friends() {
    const [friends,setFriends] = useState([])
    const user = {"id":"123","username": "Emily", "userImage": "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png", "joinedDate": "May 2013", "userFriends": [1,2,3,1,1,1]}

    return (
        <div className={"friends-page wrapper"}>
            <div className={"friendReq-section"} >
                <h3>Friend Request List </h3>

                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendRequest user={user}/>
                </Link>
                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendRequest user={user}/>
                </Link>
                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendRequest user={user}/>
                </Link>
                <Link className={"seeMore"} to={"/friends-request"}>
                    <h6>See More Requests</h6>

                </Link>
            </div>
            <div className={"friends-section"}>
                <h3>Friends List </h3>

                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link>

                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link>

                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link>
                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link> <Link to={"/profil1/"+user.username+user.id}>
                <FriendCard user={user} />
            </Link>

                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link>
                <Link to={"/profil1/"+user.username+user.id}>
                    <FriendCard user={user} />
                </Link>

            </div>

        </div>
    )
}

export default Friends
