import React from 'react'
import user from "../assets/images/user.png";
import '../styles/elements.css';

function UserImage() {
    return (
        <>
            <img src={user}  className={"userImg"} alt={"profil-img"}/>
        </>
    )
}

export default UserImage
