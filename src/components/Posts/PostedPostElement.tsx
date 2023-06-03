import { DeleteOutlined } from '@mui/icons-material';
import { Modal } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import { format } from 'date-fns';
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
import '../../styles/elements.css'
import { deletePost } from './deletePost';
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
  canDelete?: boolean;
  onDeleteClick?: () => void;

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
    canDelete,
    onDeleteClick
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
  const [showModal, setShowModal] = useState(false);
  const handleDeletePostClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }
const [disableComment,setDisableComment]=useState(true)
    const handleAddCommentClick = async () => {
      await addComment(
        comment,
        id,
        setPostComments,
        setNumberOfComments,
        setStatus,
        setErrorMessage,
        token,
      );
      setComment('')

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
  const handleComment= (e)=>{
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
                  {createdAt && (<span className="time">{format(new Date(createdAt), "dd-MM-yyyy HH:mm")}</span>)}
                </div>
              {canDelete && (<DeleteOutlined
                className="delete-button"
                onClick={handleDeletePostClick}
              />)}
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
              <input value={comment} placeholder={"add comment"} className="input-comment" onChange={handleComment}  />
              <button   className="post-btn btn  " onClick={handleAddCommentClick} disabled={!comment}>Post</button>
          </div>
          <Modal
             open={showModal}
             className="modal"
             onClose={handleCloseModal}
              title="Delete Post"
             >
            <div className="modal-body">
              <p>Are you sure you want to delete this post?</p>
              <div className="modal-operations">
                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          </Modal>

        </div>

    )
}

export default PostedPostElement
