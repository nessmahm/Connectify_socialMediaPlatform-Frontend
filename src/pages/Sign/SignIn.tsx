import React, {useContext, useState} from 'react'
import '../../styles/sign.css';
import {BiRightArrowAlt} from  "react-icons/bi";
import Alert from '@mui/joy/Alert';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { AuthContext, AuthContextType } from "../../context/context";
import { handleSignInClick } from './handleSignInClick';

function SignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string>();
    const context = useContext<AuthContextType>(AuthContext);
    const { token, login:contextLogin, logout, user } = context;
    console.log('user', user);
    const [status,setStatus] = useState('normal');
    const navigate = useNavigate();
    const handleSubmit = () => {
        handleSignInClick(login,password,contextLogin,setStatus,setErrorMessage);
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

            <div className='form-label'><h2>Sign In : </h2></div>
            {status === 'error' && errorMessage && <Alert
                color="danger"
                size="md"
                variant="soft"
                className={"signIn-error"}
            >{errorMessage} </Alert>
            }
            <div className='form'>
                
                <div  className='form-element'>
                    <label>LogIn</label>
                    <input
                      className ="input-container"
                      type="login"
                      placeholder='login,phone number , username'
                      onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                
                <div  className='form-element'>
                    <label>Password</label>
                    <input
                      type="password"
                      className ="input-container" 
                      placeholder='*******'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>


            <div className='sign-btn'> 
                <button onClick={handleSubmit} className='btn sign-btn1' > <span>Connect</span></button>
                <button onClick={()=> navigate('/signup')} type="submit" className='btn sign-btn2'> <span>Sign Up</span><BiRightArrowAlt/></button>
            </div>

        
            </div>
</div>
  )
}

export default SignIn
