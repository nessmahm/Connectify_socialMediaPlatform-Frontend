import React from 'react'
import PostedPostElement from "../../components/PostedPostElement";
import Post from "../../components/Post";
import '../../styles/home.css'
import FriendsElement from "../../components/FriendsElement";
function Home() {
    return (
        <div className={"home-page"}>
            <div className={"partOne"}>
                <FriendsElement/>

            </div>
            <div className={"partTwo"}>

            <div className={"posts"}>
                <Post/>

                <PostedPostElement/>
                <PostedPostElement/>
                <PostedPostElement/>
                <PostedPostElement/>
            </div>
            </div>


        </div>
    )
}

export default Home
