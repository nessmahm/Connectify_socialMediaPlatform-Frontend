import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import React from 'react'
import { User } from '../../context/context';
import { AuthContext } from '../../context/context';
import { addComment } from './addComment';
import { ViewStatusType } from '../../pages/Sign/SignUp';
import UserImage from "../UserImage";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comment from "./Comment";
import { dislikePost } from './dislikePost';
import { likePost } from './likePost';

export type CommentType = {
  id: string;
  content: string;
  writer: User;
  createdAt: Date;
}
export type PostedPostProps = {
  id: string;
  content: string;
  imageUrl: string;
  owner: User;
  comments: CommentType[];
  likes: User[];
  numberOfLikes: number;
  numberOfComments: number;
  isLiked: boolean;
  createdAt?: Date;

}
function PostedPostElement(props: PostedPostProps) {
  const {
    id,
    content,
    imageUrl,
    comments,
    owner,
    likes,
    numberOfLikes: numberOfLikesProp,
    numberOfComments: numberOfCommentsProp,
    isLiked: isLikedProp,
    createdAt,
  } = props
  const [comment, setComment] = useState<string>();
  const [status, setStatus] = useState<ViewStatusType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLiked, setIsLiked] = useState<boolean>(isLikedProp);
  const [numberOflikes, setNumberOfLikes] = useState<number>(numberOfLikesProp);
  const [numberOfComments, setNumberOfComments] = useState<number>(numberOfCommentsProp);
  const { token } = useContext(AuthContext);
  const handleAddCommentClick = () => addComment(
    comment,
    id,
    setNumberOfComments,
    setStatus,
    setErrorMessage,
    token,
  );
  const likeButtonLabel = isLiked ? 'Dislike' : 'Like';
  const imageLocalUrl = `../../images/${imageUrl}`;
  const handleLikeClick = () => isLiked ? dislikePost(
    id,
    setIsLiked,
    setNumberOfLikes,
    setErrorMessage,
    token) : likePost(
    id,
    setIsLiked,
    setNumberOfLikes,
    setErrorMessage, token);
    return (
        <div className={"posted-post"}>
            <div className={"header"}>
                <UserImage/>
                <div className={"info"}>
                  {owner && (<span>{owner.username}</span>)}
                  {createdAt && (<span>{createdAt.toString()}</span>)}
                </div>
            </div>

            <div className={"content"}>
                <span> {content} </span>

                <img src={imageLocalUrl} alt={"post-img"} />
            </div>
            <div className={"action"}>
                <div className={"react"}>
                            <ThumbUpIcon color={"secondary"}/>
                        <span>{numberOflikes}</span>
                        <button
                          className="btn"
                          onClick={handleLikeClick}
                        >{likeButtonLabel}</button>
                </div>

                <div className={"react"}>
                            <ChatBubbleOutlineIcon color={"secondary"}/>
                    <span>{numberOfComments}</span>

                    <span> Comment</span>
                </div>
            </div>



                <div className={"comments"}>
                  {comments && comments.length > 0 && comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      id={comment.id}
                      content={comment.content}
                      writer={comment.writer}
                      createdAt={comment.createdAt}
                    />
                  ))}
                                  </div>
          <input className="input-container" onChange={(e) => setComment(e.target.value)} />
          <button className="button-container" onClick={handleAddCommentClick}>Post</button>

        </div>

    )
}

export default PostedPostElement
