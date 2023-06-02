import React from 'react'
import {Badge, Button} from "@mui/joy";
import UserImage from "../../components/UserImage";
import FriendRequestButton from "../../components/FriendRequestButtons/FriendBtn";


function ProfilHeader(props:any){
  const  {username,userId,joined,friends,image,userState}=props;
    return (
        <div className={"profil-header"}>
            <div className={"user-img"}>
                <Badge  className={"userBadge"} color="success"/>
                    <UserImage img={image} />

            </div>
            <div className={"infos"}>

                <div className={"user-details"}>
                    <span> {username} </span>
                    <span> Joined {joined} </span>
                    <span> <strong>{friends}</strong>  friends</span>
                </div>


                 <FriendRequestButton state={userState} userId={userId} />

                { !userState && <FriendRequestButton state={"connect"}  userId={userId}/>        }

            </div>


        </div>
    )
}

export default ProfilHeader
