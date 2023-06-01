import { Button } from '@mui/joy';
import { useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import { AuthContext } from '../../context/context';
import { User } from '../../context/context';
import UserImage from '../UserImage';
import { handleSendFriendRequestClick } from './handleSendFriendRequestClick';

export type UserInfoProps = {
  user: User;
}
export const UserInfo = (props: UserInfoProps) => {
  const { user } = props
  const { token } = useContext(AuthContext);
  const [disableSendRequest, setDisableSendRequest] = useState(false);
  const [sendRequestLabel, setSendRequestLabel] = useState("Send Friend Request");
  const onSendRequestCLick = async() => {
    await handleSendFriendRequestClick(user.id, token)
    setDisableSendRequest(true)
    setSendRequestLabel('Sent')
  }
  return (
    <div className="user-info-container">
      <UserImage img={user?.image} />
      <div className="user-info">
        <span className="user-name">{user?.username}</span>
    </div>
      <Button
        className="btn"
        onClick={onSendRequestCLick}
        disabled={disableSendRequest}
      ><strong>{sendRequestLabel}</strong></Button>
    </div>
  )
}