import { DeleteOutlined } from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { useContext } from 'react';
import React from 'react'
import { AuthContext } from '../../context/context';
import UserImage from "../UserImage";
import  '../../styles/elements.css'
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
                  {createdAt && <span className={"postDate"}>{formatDistanceToNow(new Date(createdAt))}&nbsp;ago</span>}
                </div>
                <span className={"content"}>{content} </span>
            </div>
          {canEdit && (
            <div className="delete-button-container">
              <DeleteOutlined
                className="delete-button"
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
