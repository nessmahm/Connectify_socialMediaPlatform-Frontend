import React, {useState} from 'react'
import '../../styles/sign.css';
import {BiRightArrowAlt} from  "react-icons/bi";
import Alert from '@mui/joy/Alert';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('ERROR ! ');
    const hundelSubmit = ()=>{


        }

  return (

    <div className='sign-container'>

        <div className='signImage'>
            <span>Connect. Share. Inspire. Welcome to our vibrant community!</span>
        </div>

        <div className='sign-form'>

            <div className='form-label'><h2>Sign In : </h2></div>
            {error && <Alert
                color="danger"
                size="md"
                variant="soft"
                className={"signIn-error"}
            >{error} </Alert>
            }
            <div className='form'>
                
                <div  className='form-element'>
                    <label>LogIn</label>
                    <input className ={ !error ? "input-container" :"input-container input-error " } type="email" placeholder='email,phone number , username' />
                </div>
                
                <div  className='form-element'>
                    <label>Password</label>
                    <input type="password" className ={ !error ? "input-container" :"input-container input-error " }  placeholder='*******' />
                </div>
            </div>


            <div className='sign-btn'> 
                <a href='./signin' type="submit" onClick={hundelSubmit} className='btn sign-btn1' > <span>Connect</span></a>
                <a href='./signup' type="submit" className='btn sign-btn2'> <span>Sign Up</span><BiRightArrowAlt/></a> 
            </div>

        
            </div>
</div>
  )
}

export default SignIn  
