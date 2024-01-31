import React,{useState} from 'react'
import "./Signup.css"
import { TextField, Button } from '@mui/material';
// import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import signup  from '../../apis/signupAPI';

export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age, setAge] =useState("");
  const[password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender]=useState('');
  const[qualification , setQualification] = useState("");
  let navigate = useNavigate();

  function goTOLoginPage(){
    navigate('/');
  }

  async function register(){
    let data={
      name,
      email,
      password,
      confirmPassword,
      age,
      gender,
      qualification,
    };
    let response = await signup(data);
    if(response==true) goTOLoginPage();
  }
  return (
    <div className='signup-page'>
        <div className="signup-form-container">
            <div className="heading">
                <div className="SignUp">Signup</div>
                <hr />
                <div className="signup-form">
                   <TextField className="signup-input" label="Name" variant="outlined"
                   onChange={(event)=> setName(event.target.value)}
                   value={name}></TextField>

                   <TextField className="signup-input" label="Email" variant="outlined"
                   onChange={(event)=>setEmail(event.target.value)}
                   value={email}></TextField>

                   <TextField className="signup-input" label="Password"
                   type="password" variant="outlined"
                   onChange={(event)=>setPassword(event.target.value)}
                   value={password}></TextField>

                   <TextField className="signup-input" label="Confirm Password" 
                    type="password"
                    variant="outlined"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}></TextField>

                   <TextField className="signup-input" label="Age" 
                   variant="outlined"
                   onChange={(event)=>setAge(event.target.value)}
                   vaue={age}></TextField>

                   <TextField className="signup-input" label="Qualification" variant="outlined"
                   onChange={(event)=>setQualification(event.target.value)}
                   value={qualification}></TextField>

                   <TextField className="signup-input" label="Gender" variant="outlined"
                   onChange={(event)=>setGender(event.target.value)}
                   value={gender}></TextField>

                   <div className="btn-container">
                    <Button
                    variant="outlined">Register</Button>
                    <Button
                    variant="outlined"
                    onClick={goTOLoginPage}>Login</Button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
