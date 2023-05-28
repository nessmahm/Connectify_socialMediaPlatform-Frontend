import React from 'react'
import FriendRequest from "../components/FriendRequest";

function FriendRequestModal() {
    return (
        <div className={"modaal friendreq-modal"}>
            <FriendRequest userName={"Janifer"} date={"3 hours ago"} />
            <FriendRequest userName={"Janifer"} date={"3 hours ago"} />

        </div>
    )
}

export default FriendRequestModal
