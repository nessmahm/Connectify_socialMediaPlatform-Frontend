import React from 'react'
import user from '../../assets/images/user.png'
import {Badge} from "@mui/joy";
import UserImage from "../../components/UserImage";

function ProfilHeader() {
    return (
        <div className={"profil-header"}>
            <div className={"user-img"}>
                <Badge  className={"userBadge"} color="success"/>
                    <UserImage/>
            </div>
            <div className={"infos"}>
                    <span> userName </span>
                    <span> Joined May 2013 </span>
                    <span> <strong>13</strong>  friends</span>
            </div>



        </div>
    )
}

export default ProfilHeader
