import React, {useContext} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/context";
function UserDropDown() {
    const { user: loggedInUser } = useContext(AuthContext);

    return (
        <div className={"user-dropdown modaal"}>

            <Link to={"/profil/"+loggedInUser.id} className={"elements"}>
                <AccountCircleIcon/>
                <span>Profile</span>
            </Link>

            <Link to={"/settings"} className={"elements"}>
                <SettingsIcon/>
            <span>Settings</span>
        </Link>

            <Link to={"/signin"} className={"elements logout"}>
                <LogoutIcon/>
            <span>      Log Out            </span>
        </Link>

        </div>
    )
}

export default UserDropDown
