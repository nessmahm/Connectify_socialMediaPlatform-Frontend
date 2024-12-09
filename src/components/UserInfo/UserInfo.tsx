import { useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import { AuthContext } from '../../context/context';
import { User } from '../../context/context';
import { handleSendFriendRequestClick } from './handleSendFriendRequestClick';
import FriendCard from "../../pages/Friends/FriendCard";
import '../../styles/friends.css'
import '../../styles/elements.css'
import FriendRequestButton from "../FriendRequestButtons/FriendBtn";
import {Link } from 'react-router-dom';
export type UserInfoProps = {
  user: User;
}
export const UserInfo = (props: UserInfoProps) => {
  const { user } = props
  return (
    <div className="users-section all-users">

      {user && <Link to={"/profil/"+user.id}>
        <FriendCard user={user} />
      </Link> }
      {/*<Button
        className="btn"
        onClick={onSendRequestCLick}
        disabled={disableSendRequest}
      ><strong>{sendRequestLabel}</strong></Button>*/}
      <FriendRequestButton state={"notFriend" } userId={user?.id}/>
    </div>
  )
}