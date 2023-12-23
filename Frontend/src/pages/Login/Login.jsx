import React from 'react'
import './Login.css';
import {TextField, Button} from "@mui/material";

export default function Login() {
  return (
    <div className="login-page">
        <div className="login-form-container">
            <div className="heading">Login</div>
            <hr />
            <div className="login-form">
              
              <TextField
               className='login-input'
               label='Email'
               variant='outlined' />

               <TextField
               className='login-input'
               label='Password'
               type='password'
               variant='outlined' />

               <div className="btn-container">
                <Button variant='outlined'>Login</Button>
                <Button variant='outlined'>New User</Button>
               </div>
            </div>
        </div>
    </div>
  )
}
