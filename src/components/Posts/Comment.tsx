import React from 'react'
import UserImage from "../UserImage";
import  '../../styles/elements.css'
import { CommentType } from './PostedPostElement';

function Comment(props: CommentType) {
  const { content, writer, createdAt } = props;
    return (
        <div className={"comment"}>
            <UserImage/>
            <div className={"details"}>
                <div className={"info"}>
                  {writer && writer.username && (<span className={"postOwner"}>{writer.username}</span>)}
                  {createdAt && <span className={"postDate"}>{createdAt.toString()}</span>}
                </div>
                <span className={"commentText"}>{content} </span>

            </div>

        </div>
    )
}

export default Comment
