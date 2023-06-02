import Alert from '@mui/joy/Alert';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import React from 'react'
import { User } from '../../context/context';
import { AuthContext } from '../../context/context';
import { formatDate } from '../../Props/DateFormat';
import { addComment } from './addComment';
import { ViewStatusType } from '../../pages/Sign/SignUp';
import UserImage from "../UserImage";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comment from "./Comment";
import { dislikePost } from './dislikePost';
import { handleCommentDeleteClick } from './handleCommentDeleteClick';
import { likePost } from './likePost';

export type CommentType = {
  id: string;
  content: string;
  writer: User;
  createdAt: Date;
  canEdit?: boolean;
  commentStatus?: 'normal' | 'deleted';
  onDeleteCLick?: () => void;
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
export type CommentStatusMap = {
  [key: string]: 'normal' | 'deleted';
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
  const [status, setStatus] = useState<ViewStatusType>('normal');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();
  const [isLiked, setIsLiked] = useState<boolean>(isLikedProp);
  const [numberOflikes, setNumberOfLikes] = useState<number>(numberOfLikesProp);
  const [numberOfComments, setNumberOfComments] = useState<number>(numberOfCommentsProp);
  const [commentStatusMap, setCommentStatusMap] = useState<CommentStatusMap>();
  const [postComments, setPostComments] = useState<CommentType[]>(comments);
  const { token, user } = useContext(AuthContext);
const [disableComment,setDisableComment]=useState(true)
    const handleAddCommentClick = () => {
      addComment(
        comment,
        id,
        setPostComments,
        setNumberOfComments,
        setStatus,
        setErrorMessage,
        token,
      );
      setComment(undefined)
    }
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
  const handelComment= (e)=>{
      setComment(e.target.value)
    }
    return (
        <div className={"posted-post"}>
          {status === 'error' && errorMessage && (
            <Alert
              color="danger"
              size="md"
              variant="soft"
              className={"signIn-error"}
          >
              {errorMessage}
            </Alert>
          )}
          {status === 'success' && successMessage && (
            <Alert
              color="success"
              size="md"
              variant="soft"
            >
              {successMessage}
            </Alert>
          )}
            <div className={"header"}>
                <UserImage/>
                <div className={"info"}>
                  {owner && (<span>{owner.username}</span>)}
                  {createdAt && (<span>{formatDate(createdAt)}</span>)}
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
                  {postComments && postComments.length > 0 && postComments.map((comment) => (
                    <Comment
                      key={comment?.id}
                      id={comment?.id}
                      content={comment?.content}
                      writer={comment?.writer}
                      createdAt={comment?.createdAt}
                      canEdit={comment.writer?.id === user?.id }
                      commentStatus={commentStatusMap?.[comment.id]}
                      onDeleteCLick={() => handleCommentDeleteClick(comment.id,
                        setStatus,
                        setErrorMessage,
                        setSuccessMessage,
                        setNumberOfComments,
                        setCommentStatusMap,
                        token)}
                    />
                  ))}
                </div>
          <div className={"comment-maker"}>
              <input value={comment} placeholder={"add comment"} className="input-comment" onChange={handelComment}  />
              <button   className="post-btn btn  " onClick={handleAddCommentClick} disabled={!comment}>Post</button>
          </div>

        </div>

    )
}

export default PostedPostElement
