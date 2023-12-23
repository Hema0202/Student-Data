import React from 'react'
import "./Signup.css"
import { TextField, Button } from '@mui/material';
// import Button from '@mui/material/Button';


export default function Signup() {
  return (
    <div className='signup-page'>
        <div className="signup-form-container">
            <div className="heading">
                <div className="SignUp">Signup</div>
                <hr />
                <div className="signup-form">
                   <TextField className="signup-input" label="Name" variant="outlined"></TextField>

                   <TextField className="signup-input" label="Email" variant="outlined"></TextField>

                   <TextField className="signup-input" label="Password"
                   type="password" variant="outlined"></TextField>

                   <TextField className="signup-input" label="Confirm Password" 
                    type="password"
                    variant="outlined"></TextField>

                   <TextField className="signup-input" label="Age" 
                   variant="outlined"></TextField>

                   <TextField className="signup-input" label="Qualification" variant="outlined"></TextField>

                   <TextField className="signup-input" label="Gender" variant="outlined"></TextField>

                   <div className="btn-container">
                    <Button
                    variant="outlined">Register</Button>
                    <Button
                    variant="outlined">Login</Button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
