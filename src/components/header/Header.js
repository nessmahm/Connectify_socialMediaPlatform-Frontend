import React, {useContext, useEffect, useState} from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import HomeIcon from '@mui/icons-material/Home';
import '../../styles/header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import user from '../../assets/images/user.png'
import UserDropDown from "../modals/UserDropDown";
import {Link} from "react-router-dom";
import NotificationModal from "../modals/NotificationModal";
import FriendRequestModal from "../modals/FriendRequestModal";
import '../../styles/modal.css'
import SearchBar from "../SearchBar/SearchBar";
import SearchModal from "../modals/SearchModal";
import {AuthContext} from "../../context/context";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
function Header() {
    const [notificationBadge, setnotificationBadge] = useState({"visible": true,"number":2});
    const [messageBadge, setmessageBadge] = useState({"visible": true,"number":2});
    const [friendRedBadge, setFriendReqBadge] = useState({"visible": true,"number":3});
    const [userDropdown , setUserDropdown] = useState(false)
    const [notificationDropdown , setnotificationDropdown] = useState(false)
    const [friendsReqDropdown , setfriendsReqDropdown] = useState(false)
    const [searchModal,setSearchModal] = useState(false)
    const [searchText, setsearchText] = useState("");
    const { token, user } = useContext(AuthContext);

    useEffect(() =>
{   },[searchText]);
    let searchHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setsearchText(lowerCase);

    };
    const handelNotification = () => {
        setnotificationDropdown(!notificationDropdown)
        setnotificationBadge({"visible": false })
    }
    const handelFriendRequest = () => {
        setfriendsReqDropdown(!friendsReqDropdown)
        setFriendReqBadge({"visible": false })
        console.log(friendsReqDropdown)
    }
    return (
        <div>
        <header>
            <div className={"logo"}> ConnectiFy </div>

            <div className={"middle"}>
                    <Link to={"/friends"} className={"icon-wrapper"}>
                        <Diversity3OutlinedIcon color={"secondary"} />
                    </Link>

                    <Link to={"/"} className={"icon-wrapper"}>

                        <HomeIcon className={"icon"} color={"secondary"} />
                    </Link>

                    <Link to={"/users"} className={"icon-wrapper"}>

                        <GroupAddIcon  color={"secondary"} />
                    </Link>

            </div>


            <div className={"third"}>

                <div className={"icon-wrapper search-element"} onClick={()=>setSearchModal(true) }>
                    <SearchBar inputHandler={searchHandler}/>
                </div>
                {searchModal && <div onMouseLeave={()=>setSearchModal(false)}>  <SearchModal input={searchText} />  </div> }
                <span className={"separator"}></span>
                <div className={"icon-wrapper"}  onClick={handelNotification}>
                    <Badge badgeContent={notificationBadge.number} invisible={!notificationBadge.visible} color="secondary">

                    <NotificationsOutlinedIcon className={"icon"} />
                    </Badge>
                    {notificationDropdown &&  <div onMouseLeave={()=>setnotificationDropdown(false)}> <NotificationModal/> </div>}

                </div>

                <div className={"icon-wrapper"} onClick={handelFriendRequest}>
                    <Badge badgeContent={friendRedBadge.number} invisible={!friendRedBadge.visible} color="secondary">

                    <PeopleAltOutlinedIcon className={"icon"} />
                    </Badge>
                    {friendsReqDropdown && <div onMouseLeave={()=>setfriendsReqDropdown(false)}> <FriendRequestModal/> </div>}
                </div>

                <div className={"user"}>
                    {user && (
                        <>
                            <span>{user && user?.username}</span>
                        <img src={user?.image}  alt={"user"} onClick={()=>setUserDropdown(!userDropdown)}/>
                        {userDropdown && <UserDropDown/>}
                        </>
                        )}

                </div>




            </div>


        </header>


        </div>
    )
}

export default Header

