import React ,{useState}from 'react'
import SignUpCoach from './SignUpCoach';
import SignUpEntrep from './SignUpEntrep';
import SignUpPart1 from './SignUpPart1';
import {BiRightArrowAlt} from  "react-icons/bi";
import {BiLeftArrowAlt} from  "react-icons/bi";

function SignUp() {
    const [signUp,setSignUp] = useState(true);
    const [coachSignUp,setCoachSignUp] = useState(false);
    const [entrepreneurSignUp,setEntrepreneurSignUp] = useState(false);
    
    return (
<div className='sign-container'>
    <div className='signImage'> </div> 

    <div className='sign-form'>

    <div className='form-label'><h2>Sign Up : </h2></div>

    {signUp?
      (<>
        <SignUpPart1/>
        <div className='choices-btn'>
                
                <button className="btn" onClick={()=>setSignUp(false) && setCoachSignUp(true)&& console.log(SignUpCoach)}>Coach</button>
                <button className="btn" onClick={()=>  setSignUp(false) && setEntrepreneurSignUp(true)}>Entrepreneur</button>
               
        </div>
        <div className='sign-btn'> 
                <a href='./signin' type="submit" className='btn sign-btn2' > <span>Sign In</span><BiRightArrowAlt/></a> 
        </div>
        </>
    )
    :
    (
    SignUpCoach?
    <>
        <SignUpCoach/>
        <div className='sign-btn'> 
                <a type="submit" className='btn sign-btn2' onClick={()=>setSignUp(true) && setCoachSignUp(false)} ><BiLeftArrowAlt/> <span>Back</span></a> 
                <a type="submit" className='sign-btn1 btn'> <span>Submit</span> </a> 
        </div>
    </>
    : 
     (SignUpEntrep?
    ( <>
        <SignUpEntrep/>
        <div className='sign-btn'> 
                <a type="submit" className='sign-btn1 btn'> <span>Submit</span> </a> 
                <a type="submit" className='btn sign-btn2' onClick={()=>setSignUp(true) && setCoachSignUp(false)} ><BiLeftArrowAlt/> <span>Back</span></a> 


        </div>
    </>)
    : (<></>)
    ))
      }
    
    
    
    </div>


</div>
        )
}

export default SignUp