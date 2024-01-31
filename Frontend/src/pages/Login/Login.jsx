import React,{useState} from 'react'
import './Login.css';
import {TextField, Button} from "@mui/material";
import{useNavigate} from "react-router-dom";
import login from '../../apis/loginAPI'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  let navigate = useNavigate();

  function goToSignupPage(){
    navigate('/signup');
  }

  async function handleLogin(){
    let data = {email,password};
    let response = await login(data);
    if(response == true) navigate('/student');
  }
  return (
    <div className="login-page">
        <div className="login-form-container">
            <div className="heading">Login</div>
            <hr />
            <div className="login-form">
              
              <TextField
               className='login-input'
               label='Email'
               variant='outlined'
               onChange={(event) => setEmail(event.target.value)}
               value={email} />

               <TextField
               className='login-input'
               label='Password'
               type='password'
               variant='outlined'
               onChange={(event)=>setPassword(event.target.value)}
               value={password} />

               <div className="btn-container">
                <Button variant='outlined' onClick={handleLogin}>Login</Button>
                <Button variant='outlined' onClick={goToSignupPage}>New User</Button>
               </div>
            </div>
        </div>
    </div>
  )
}
