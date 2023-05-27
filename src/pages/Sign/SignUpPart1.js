import React from 'react'
import {BiRightArrowAlt} from  "react-icons/bi";
function SignUpPart1() {
  return (
    <div className="form">

                <div className='form-element'>
                    <label>Full Name</label>
                    <input className ="input-container" type="text" placeholder='john doe' />
                </div>

                <div className='form-element'>
                    <label>Email</label>
                    <input type="text" className ="input-container"  placeholder='johndoe@gmail.com' />
                </div>

                <div className='form-element'>
                    <label>Username</label>
                    <input type="text" className ="input-container"  placeholder='john123' />
                </div>

                <div className='form-element'>
                    <label>Password</label>
                    <input type="password" className ="input-container" placeholder='***************' />
                </div>

                <div className='form-element'>
                    <label>Password</label>
                    <input type="password" className ="input-container"  placeholder='***************' />
                </div>

               

            </div>
            

 )
}

export default SignUpPart1