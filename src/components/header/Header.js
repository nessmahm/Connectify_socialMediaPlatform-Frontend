import React, {useState} from 'react'
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
import UserDropDown from "../../modals/UserDropDown";
import {Link} from "react-router-dom";

function Header() {
    const [notificationBadge, setnotificationBadge] = useState({"visible": true,"number":2});
    const [messageBadge, setmessageBadge] = useState({"visible": true,"number":2});
    const [friendRedBadge, setFriendReqBadge] = useState({"visible": true,"number":3});
    const [userDropdown , setUserDropdown] = useState(false)
    return (
        <div>
        <header>
            <div className={"logo"}> Logo</div>

            <div className={"middle"}>

                <Link to={"/friends"} className={"icon-wrapper"}>
                    <Diversity3OutlinedIcon  />
                </Link>

                <Link to={"/home"} className={"icon-wrapper"}>

                    <HomeIcon className={"icon"} />
                </Link>

                <Link to={"/messages"} className={"icon-wrapper"}>
                    <Badge variant="dot" invisible={!messageBadge.visible} color="secondary">

                    <SmsOutlinedIcon />
                    </Badge>
                </Link>

            </div>

            <div className={"third"}>
                <div className={"icon-wrapper"}>
                    <SearchIcon className={"icon"}/>
                </div>

                <span className={"separator"}></span>
                <div className={"icon-wrapper"}>
                    <Badge badgeContent={notificationBadge.number} invisible={!notificationBadge.visible} color="secondary">

                    <NotificationsOutlinedIcon className={"icon"}/>
                    </Badge>
                </div>
                <div className={"icon-wrapper"}>
                    <Badge badgeContent={friendRedBadge.number} invisible={!friendRedBadge.visible} color="secondary">

                    <PeopleAltOutlinedIcon className={"icon"} />
                    </Badge>
                </div>

                <div className={"user"}>
                    <span>{"userName"}</span>
                    <img src={user}  alt={"user"} onClick={()=>setUserDropdown(!userDropdown)}/>

                </div>
                {userDropdown && <UserDropDown/>}




            </div>


        </header>


        </div>
    )
}

export default Header

