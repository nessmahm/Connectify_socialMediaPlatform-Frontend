import { Button } from '@mui/joy';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import '../../styles/home.css'
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import post from '../../components/Posts/Post';
import { PostData } from '../../components/Posts/Post';
import Post from '../../components/Posts/Post';
import { PostedPostProps } from '../../components/Posts/PostedPostElement';
import PostedPostElement from '../../components/Posts/PostedPostElement';
import { AuthContext } from '../../context/context';
import FriendsElement from '../Friends/FriendsElement';
import { requestHomePagePosts } from './requestHomePagePosts';
function Home() {
  const [posts, setPosts] = React.useState<PostData[][]>([])
  const [status, setStatus] = useState('normal' );
  const [errorMessage, setErrorMessage] = useState<string>();
  const { token, user } = useContext(AuthContext);
  const shouldShowPosts = posts && posts.length > 0;
  const numberOfPosts = posts?.reduce((acc, curr) => acc + curr.length, 0);
  const navigate = useNavigate()
  useEffect(() => {
    requestHomePagePosts(setPosts, setStatus, setErrorMessage, token);
  },[])
  if (status === 'loading') {
    return (
      <LoadingSpinner />
    )
  }
  return (
    <div className="home-page-container">
    <div className={"home-page"}>
      { status === 'error' && errorMessage && (
        <Alert
          severity="error"
          color="error"
        >
          {errorMessage}
        </Alert>

      )}

        <div className={"posts"}>
          {posts && numberOfPosts === 0 && (
            <div className={"no-posts"}>
              <h4>No posts from friends yet</h4>

            </div>
              )}
          {shouldShowPosts && posts.map((post: PostedPostProps[]) => (
            post.map((post: PostedPostProps) => (
            <PostedPostElement
              id={post.id}
              content={post.content}
              comments={post.comments}
              owner={post.owner}
              createdAt={post.createdAt}
              numberOfComments={post.numberOfComments}
              numberOfLikes={post.numberOfLikes}
              likes={post.likes}
              isLiked={post.isLiked}
              imageUrl={post.imageUrl}
            />
          ))))}
        </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => { navigate('/users') }}
        >Connect With People</button>
      </div>
      </div>
    </div>
  )
}

export default Home