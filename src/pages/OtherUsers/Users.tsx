import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import React from 'react'
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import '../../styles/home.css'
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { User } from '../../context/context';
import { AuthContext } from '../../context/context';
import FriendsElement from "../Friends/FriendsElement";
import { ViewStatusType } from '../Sign/SignUp';
import { requestUsers } from './requestUsers';
import { Link } from 'react-router-dom';
import Pagination from "@mui/material/Pagination";
function Users() {
  const [users, setUsers] = useState<User[]>();
  const [status, setStatus] = useState<ViewStatusType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { token, user: loggedInUser } = useContext(AuthContext);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const handlePaginationChange = ( _event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log("page",value);
    };
   useEffect(() => {
      requestUsers(page,setTotalPage,setUsers, setStatus, setErrorMessage ,token);
  },[loggedInUser,page]);
  if (status === 'loading')  {
    return <LoadingSpinner/>
  }
    return (
        <div className={"friends-page users-page wrapper"}>

            {users && users.map((user) => (
                  <UserInfo user={user} key={user.id} />

          ))}

            <Pagination count={totalPage} page={page} onChange={handlePaginationChange} />

        </div>
    )
}

export default Users
