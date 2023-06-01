import React, {useContext, useEffect, useState} from 'react'
import '../../styles/profil.css'
import ProfilHeader from './ProfilHeader'
import Post from "../../components/Posts/Post";
import FriendsElement from "../Friends/FriendsElement";
import PostedPostElement from "../../components/Posts/PostedPostElement";
import {useParams} from "react-router-dom";
import {requestAllPosts} from "./requestAllPosts";
import {AuthContext} from "../../context/context";
import {PostData} from "../../components/Posts/Post";
import {PostedPostProps} from "../../components/Posts/PostedPostElement";

import {ViewStatusType} from "../Sign/SignUp";
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";
function Profil() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [posts, setPosts] = useState<PostedPostProps[]>([]);
    const [status, setStatus] = useState('normal');
    const [errorMessage, setErrorMessage] = useState('');
    const [user,setUser]= useState({"userName":"userName","userImage":"","joinedDate":"May 2013","userFriends":[],"userState":true,"userPosts":[] })
    useEffect(() => {
        requestAllPosts(loggedInUser?.id, setPosts, setStatus, setErrorMessage, token);
    }, [loggedInUser]);
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div className={"profil"}>

            <ProfilHeader user={user} />
            <div className={"profile-body"}>
                <div className={"partOne"}>
                    <FriendsElement/>
                </div>

                <div className={"partTwo"}>
                    {user.userState && <Post/>}
                    {
                        posts && posts.length > 0 && posts.map((post: PostedPostProps) => (
                            <PostedPostElement
                                id={post.id}
                                content={post.content}
                                comments={post.comments}
                                username={loggedInUser.username}
                                date={post.date}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Profil
