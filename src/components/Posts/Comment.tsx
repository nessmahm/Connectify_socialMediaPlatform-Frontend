import { DeleteOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { useState } from 'react';
import React from 'react'
import { AuthContext } from '../../context/context';
import { formatDate } from '../../Props/DateFormat';
import UserImage from "../UserImage";
import  '../../styles/elements.css'
import { handleCommentDeleteClick } from './handleCommentDeleteClick';
import { CommentType } from './PostedPostElement';

function Comment(props: CommentType) {
  const {
    id,
    content,
    writer,
    createdAt,
    canEdit,
    commentStatus,
    onDeleteCLick,
  } = props;
  const {token} = useContext(AuthContext);
  if (commentStatus === 'deleted') {
    return null;
  }
    return (
        <div className={"comment"}>
            <UserImage/>
            <div className={"details"}>
                <div className={"info"}>
                  {writer && writer.username && (<span className={"postOwner"}>{writer.username}</span>)}
                  {createdAt && <span className={"postDate"}>{formatDate(createdAt)}</span>}
                </div>
                <span className={"commentText"}>{content} </span>
            </div>
          {true && (
            <div className="delete-button-container">
              <DeleteOutlined
                role="button"
                onClick={onDeleteCLick}
              />
            </div>
          )
          }

        </div>
    )
}

export default Comment
