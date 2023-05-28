import React from 'react'
import Notification from "../components/Notification";
import '../styles/modal.css'
function NotificationModal() {
    return (
        <div className={"notification-modal modaal "}>

            <h3>Notifications</h3>
            <div className={"notifications"}>
                <Notification userName={"Jennifer"} action={"commented your post"} date={"1 hour ago"}/>
                <Notification userName={"Jennifer"} action={"Liked your post"} date={"1 hour ago"}/>
                <Notification userName={"Jennifer"} action={"Accepted your friend Request"} date={"1 hour ago"}/>

            </div>
        </div>
    )
}

export default NotificationModal
