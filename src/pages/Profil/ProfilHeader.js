import React from 'react'
import user from '../../assets/images/user.png'
import {Badge, Button} from "@mui/joy";
import UserImage from "../../components/UserImage";
import FriendRequestButton from "../../components/FriendRequestButtons/FriendBtn";

function ProfilHeader({user}) {
    return (
        <div className={"profil-header"}>
            <div className={"user-img"}>
                <Badge  className={"userBadge"} color="success"/>
                    <UserImage/>

            </div>
            <div className={"infos"}>

                <div className={"user-details"}>
                    <span> userName </span>
                    <span> Joined May 2013 </span>
                    <span> <strong>13</strong>  friends</span>
                </div>

                { !user.userState && <FriendRequestButton state={"connect"} />        }

            </div>


        </div>
    )
}

export default ProfilHeader
