import React from 'react'
import UserImage from "../UserImage";
import  '../../styles/elements.css'

function Comment() {
    return (
        <div className={"comment"}>
            <UserImage/>
            <div className={"details"}>
                <div className={"info"}>
                    <span className={"postOwner"}>User Name</span>
                    <span className={"postDate"}>Date</span>
                </div>
                <span className={"commentText"}> My comment </span>

            </div>

        </div>
    )
}

export default Comment
