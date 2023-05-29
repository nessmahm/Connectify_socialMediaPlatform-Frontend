import React from 'react'
import user from "../assets/images/user.png";
import '../styles/elements.css';

function UserImage({img=user}) {
    return (
        <>
            <img src={img}  className={"userImg"} alt={"profil-img"}/>
        </>
    )
}

export default UserImage
