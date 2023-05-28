import React ,{useState}from 'react'
import {BiRightArrowAlt} from  "react-icons/bi";

function SignUp() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState({"userName":"required"});
    const [userName , setUserName] = useState('');
    const [repeatedPassword, setrepeatedPassword] = useState('');
    const [email, setEmail] = useState();
    const hundelSubmit = ()=>{
        if(!userName)
        { setEmail({...email,"userName" : "required"})}
        if(!email)
        { setEmail({...email,"email" : "required"})}
        if(!password)
        { setEmail({...email,"password" : "required"})}
        if(!repeatedPassword)
        { setEmail({...email,"repeatedPassword" : "required"})}




    }
    console.log(error)
    return (
        <div className='sign-container'>
            <div className='signImage'>
            <span>Connect. Share. Inspire. Welcome to our vibrant community!</span>
            </div>

            <div className='sign-form'>

                <div className='form-label'><h2>Sign Up : </h2></div>

                <form className="form">

                    <div className='form-element'>
                        <label>UserName</label>
                        <input className ={ !error.userName ? "input-container" :"input-container input-error " }  type="text" placeholder='johndoe' required />

                        {error.userName && <span className={"error"}> {error.userName}</span> }
                    </div>

                    <div className='form-element'>
                        <label>Email</label>
                        <input type="text" className ={ !error.email ? "input-container" :"input-container input-error " }  placeholder='johndoe@gmail.com'  required/>
                        {error.email && <span className={"error"}> {error.email}</span> }



                    </div>

                    <div className='form-element'>
                        <label>Phone Number </label>
                        <input type="number" className ={ !error.phoneNumber ? "input-container" :"input-container input-error " }  placeholder='12 34 56 78' required />
                        {error.phoneNumber &&  <span className={"error"}> {error.phoneNumber}</span> }



                    </div>

                    <div className='form-element'>
                        <label>Password</label>
                        <input type="password" className ={ !error.password ? "input-container" :"input-container input-error " } placeholder='***************' />
                        {error.password &&  <span className={"error"}> {error.password}</span> }

                    </div>

                    <div className='form-element'>
                        <label>Password</label>
                        <input type="password" className ={ !error.repeatedPassword ? "input-container" :"input-container input-error " }  placeholder='***************' required/>
                        {error.repeatedPassword &&  <span className={"error"}> {error.repeatPassword}</span> }

                    </div>



                </form>


                <div className='sign-btn'>
                    <a href='./signin' type="submit" className='btn sign-btn2' onClick={hundelSubmit}> <span>Sign In</span><BiRightArrowAlt/></a>
                    <a href='./acceuil' type="submit" className='btn sign-btn1' > <span>Submit</span></a>
                </div>
            </div>

        </div>
    )
}

export default SignUp