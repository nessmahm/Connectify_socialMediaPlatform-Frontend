import  React, {useContext, useState} from 'react'
import {BiRightArrowAlt} from  "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { AuthContextType } from '../../context/context';
import {AuthContext} from "../../context/context";
import {handleSignUpClick} from "./handleSignUpClick";
import {Alert} from "@mui/material";

export type viewStatusType = 'normal' | 'error' | 'success' | 'loading'
function SignUp() {
    const [password, setPassword] = useState<string>('');
    const [userName , setUserName] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');
    const [email, setEmail] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<number>();
    const context = useContext<AuthContextType>(AuthContext);
    const { token, login, logout } = context
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>()
    const [successMessage, setSuccessMessage] = useState<string>();
    const shouldDisableSubmit = !userName || !email || !password || !phoneNumber || !repeatedPassword || password !== repeatedPassword
    const [status,setStatus] = useState('normal')
    const navigate = useNavigate();
    console.log("token", token)
    const handleSubmit = () => {
        handleSignUpClick(
            userName,
            email,
            password,
            phoneNumber,
            'MALE',
            setStatus,
            setErrorMessage,
            setSuccessMessage,
        )
    }

    if (status === 'loading') {
        return (
          <LoadingSpinner/>
        )
    }

    return (
        <div className='sign-container'>
            <div className='signImage'>
            <span>Connect. Share. Inspire. Welcome to our vibrant community!</span>
            </div>

            <div className='sign-form'>
                { status === 'error' && errorMessage && (
                    <Alert
                        severity="error"
                        color="error"
                    >
                        {errorMessage}
                    </Alert>

                )}
                {
                    status === 'success' && successMessage && (
                        <Alert
                            severity="success"
                        >
                            {successMessage}
                        </Alert>
                    )
                }
                <div className='form-label'><h2>Sign Up : </h2></div>

                <form className="form">

                    <div className='form-element'>
                        <label>UserName</label>
                        <input
                            type="text"
                            placeholder='johndoe'
                            required
                            className="input-container"
                            onChange={(e)=>{setUserName(e.target.value)}}
                        />

                    </div>

                    <div className='form-element'>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder='johndoe@gmail.com'
                            required
                            className="input-container"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />



                    </div>

                    <div className='form-element'>
                        <label>Phone Number </label>
                        <input
                            type="number"
                            placeholder='12 34 56 78'
                            required
                            className="input-container"
                            onChange={(e) => {setPhoneNumber(e.target.valueAsNumber)}}
                        />



                    </div>

                    <div className='form-element'>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder='***************'
                            onChange={(e) => {setPassword(e.target.value)}}
                            required
                            className="input-container"
                        />

                    </div>

                    <div className='form-element'>
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            required
                            onChange={(e) => {setRepeatedPassword(e.target.value)}}
                            className="input-container"
                        />

                    </div>



                </form>


                <div className='sign-btn'>
                    <button
                        onClick={handleSubmit}
                        className="btn sign-btn1"
                        disabled={shouldDisableSubmit}
                    > <span>Submit</span><BiRightArrowAlt/></button>
                    <button
                      className="btn sign-btn1"
                      onClick={() => navigate('/signin')}
                    > <span>Sign In</span><BiRightArrowAlt/></button>
                </div>
            </div>

        </div>
    )
}

export default SignUp