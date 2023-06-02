import { Alert } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react'
import '../../styles/profil.css'
import { deletePost } from '../../components/Posts/deletePost';
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
    const [userState, setUserState] = useState('');
    const [friends, setFriends] = useState<User[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>();
    const {userId}=useParams();
    console.log("logged user " , loggedInUser);
    useEffect(() => {
        requestAllPosts(userId, setPosts, setStatus, setErrorMessage, token);
        requestAllFriends(userId, setFriends, setStatus, setErrorMessage, token);
        requestUser(userId,loggedInUser?.id, setUser,setUserState, setStatus, setErrorMessage);
        console.log("user",user)
        console.log("userFrindShip",userState)

    }, [loggedInUser,userId]);
    const handleDeleteCLick = (id: string) => {deletePost(id ,setPosts,setStatus,setSuccessMessage, setErrorMessage, token);

    }
    if (status === 'loading') {
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <div className={"profil"}>

            {user && (
                <ProfilHeader username={user?.username} joined={formatDate(user?.createdAt)} image={user?.image} userState={userState} friends={friends.length } userId={user?.id} />
                )
            }
            { status === 'error' && errorMessage && (
              <Alert
                severity="error"
                color="error"
              >
                  {errorMessage}
              </Alert>

            )}
            {
              ( status === 'success' && successMessage ) &&
              <Alert
                severity="success"
              >
                  {successMessage}
              </Alert>

            }
            <div className={"profile-body"}>
                <div className={"partOne"}>
                    {
                        friends && friends.length > 0 &&  <FriendsElement friends={friends}/>
                    }
                </div>

                <div className={"partTwo"}>
                    {loggedInUser && <Post/>}
                    {
                        posts && posts.length > 0 && posts.map((post: PostedPostProps) => (
                            <PostedPostElement
                                id={post.id}
                                content={post.content}
                                comments={post.comments}
                                owner={user}
                                createdAt={post.createdAt}
                                numberOfComments={post.numberOfComments}
                                numberOfLikes={post.numberOfLikes}
                                likes={post.likes}
                                isLiked={post.isLiked}
                                imageUrl={post.imageUrl}
                                canDelete={post.owner?.id === loggedInUser?.id}
                                onDeleteClick={() => handleDeleteCLick(post.id)}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
export default Profil
