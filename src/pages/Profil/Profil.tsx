import React, {useContext, useEffect, useState} from 'react'
import '../../styles/profil.css'
import ProfilHeader from './ProfilHeader'
import Post from "../../components/Posts/Post";
import FriendsElement, {FriendsElementProps} from "../Friends/FriendsElement";
import PostedPostElement from "../../components/Posts/PostedPostElement";
import {useParams} from "react-router-dom";
import {requestAllPosts} from "./requestAllPosts";
import {AuthContext, User} from "../../context/context";
import {PostedPostProps} from "../../components/Posts/PostedPostElement";
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";
import {requestAllFriends} from "./requestAllFriends";
import {requestUser} from "./requestUser";
import {formatDate} from "../../Props/DateFormat"

function Profil() {
    const { token, user: loggedInUser } = useContext(AuthContext);
    const [posts, setPosts] = useState<PostedPostProps[]>([]);
    const [status, setStatus] = useState('normal');
    const [user, setUser] = useState<User>();
    const [friends, setFriends] = useState<User[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {userId}=useParams();
    console.log("logged user " , loggedInUser);
    useEffect(() => {
        requestAllPosts(userId, setPosts, setStatus, setErrorMessage, token);
        requestAllFriends(userId, setFriends, setStatus, setErrorMessage, token);
        requestUser(userId, setUser, setStatus, setErrorMessage, token);
        console.log(user)

    }, [loggedInUser]);
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div className={"profil"}>

            {user && (
                <ProfilHeader username={user.username} joined={formatDate(user.createdAt)} image={user.image} userState={loggedInUser ? true : false } friends={friends.length } />
                )
            }
            <div className={"profile-body"}>
                <div className={"partOne"}>
                    <FriendsElement friends={friends}/>
                </div>

                <div className={"partTwo"}>
                    {loggedInUser && <Post/>}
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
