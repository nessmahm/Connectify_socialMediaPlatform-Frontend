import React, {useEffect, useState} from 'react'
import UserImage from "../components/UserImage";
import {Link} from "react-router-dom";

function SearchModal({input}) {
    const [user,setUser]= useState({"username":"userName","userImage":"","joinedDate":"May 2013","userFriends":[],"userState":true,"userPosts":[] })
    const users1 = [
        { id:1,username: 'user1' },
        { id:2,username: 'user2' },
        { id:3,username: 'user3' }]

    useEffect(() =>

    {    console.log(input)  },[input]);
    const filteredData = users1.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.username.toLowerCase().includes(input)
        }
    })
    return (
        <div className={"modaal search-modal"}>

            {filteredData && filteredData.map((user) => (
                <Link key={user.id} to={`profil1/${user.userName}/${user.id}`}>
                    <User user={user} />
                </Link>
            ))}
            {filteredData.length==0 && <div className={"empty-modal"}><span >no user found</span></div>

            }
        </div>
    )
}

function User ({user}) {
    return (
        <div className={"user"}>
            <UserImage/>
            <div className={"details"}>
                <span> <strong>{user.username} </strong> </span>
                <span>{"connected"}</span>        </div>
            </div>
    )

}

export default SearchModal
