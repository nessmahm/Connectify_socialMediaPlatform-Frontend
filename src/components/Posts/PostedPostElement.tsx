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

export type CommentType = {
  content: string;
  owner: User;
}
export type PostedPostProps = {
  content: string | undefined;
  comments: CommentType[];
  username: string,
  date: string,
  id: string
}
function PostedPostElement(props: PostedPostProps) {
  const {
    content,
    comments,
    username,
    date,
    id,
  } = props
  const [comment, setComment] = useState<string>();
  const [status, setStatus] = useState<ViewStatusType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { token } = useContext(AuthContext);
  const handleAddCommentClick = () => addComment(
    comment,
    id,
    setStatus,
    setErrorMessage,
    token,
  )
    return (
        <div className={"posted-post"}>
            <div className={"header"}>
                <UserImage/>
                <div className={"info"}>
                    <span>{username} </span>
                    <span>{date}</span>
                </div>
            </div>

            <div className={"content"}>
                <span> {content} </span>

                <img src={"https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} alt={"post-img"} />
            </div>
            <div className={"action"}>
                <div className={"react"}>
                            <ThumbUpIcon color={"secondary"}/>
                        <span>10</span>
                        <span> Like</span>
                </div>

                <div className={"react"}>
                            <ChatBubbleOutlineIcon color={"secondary"}/>
                    <span>19</span>

                    <span> Comment</span>
                </div>
            </div>



                <div className={"comments"}>
                    <Comment/>
                    <Comment/>
                </div>
          <input className="input-container" onChange={(e) => setComment(e.target.value)} />
          <button className="button-container" onClick={handleAddCommentClick}>Post</button>

        </div>

    )
}

export default PostedPostElement
