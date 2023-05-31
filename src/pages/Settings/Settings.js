import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import '../../styles/settings.css'
import Alert from "@mui/joy/Alert";
function Settings() {
    const [username, setUsername] = useState('');
    const [login, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the update logic with the updated values (e.g., make an API call)
        console.log('Updated values:', { username, login, phoneNumber, password });
        // Reset the form fields if needed
        setUsername('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
    };

    return (
        <div className={" settings wrapper"}>
            <Alert severity="secondary" color="info">
                Login Information
            </Alert>
            <form onSubmit={handleSubmit}>
                <label>
            <span> Username: </span>
                    <Input type="text" value={username} onChange={handleUsernameChange}  variant={"filled"}/>
                </label>
                <br />
                <label>
                    <span> Email: </span>
                    <Input type="login" value={login} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    <span> Phone Number: </span>
                    <Input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <br />
                <label>
                    <span> Add Your New Password: </span>
                    <Input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <label>
                <span> Repeat Password: </span>
                <Input type="password" value={password} onChange={handlePasswordChange} />
            </label>
                <br />
                <Button variant="contained" color="secondary" type="submit">
                    Save Changes
                </Button>
            </form>
        </div>
    );
}


export default Settings
