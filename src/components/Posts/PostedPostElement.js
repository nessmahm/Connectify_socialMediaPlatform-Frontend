import React from 'react'
import UserImage from "../UserImage";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comment from "./Comment";

function PostedPostElement() {
    return (
        <div className={"posted-post"}>
            <div className={"header"}>
                <UserImage/>
                <div className={"info"}>
                    <span>User Name </span>
                    <span>Date</span>
                </div>
            </div>

            <div className={"content"}>
                <span> My first Post </span>

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

        </div>
    )
}

export default PostedPostElement
