import React from 'react'
import '../../styles/profil.css'
import ProfilHeader from './ProfilHeader'
import Post from "./Post";
import FriendsElement from "../../components/FriendsElement";
import PostedPostElement from "../../components/PostedPostElement";
function Profil() {
    return (
        <div className={"profil"}>

            <ProfilHeader/>
            <div className={"profile-body"}>
                <div className={"partOne"}>
                    <FriendsElement/>
                </div>
                <div className={"partTwo"}>
                    <Post/>
                    <PostedPostElement/>
                </div>
            </div>

        </div>
    )
}

export default Profil
