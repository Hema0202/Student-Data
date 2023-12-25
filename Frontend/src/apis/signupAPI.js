import axios from 'axios';

async function signup(data){
    try {
       let {name,email,password,confirmPassword,qualification,gender,age}=data;    
       if(!name) return alert('name is required');
       if(!email) return alert('email is required');
       if(!password) return alert('password is required');
       if(!confirmPassword) return alert('confirm password is required');
       if(!qualification) return alert('qualification is required');
       if(!gender) return alert('gender is required');
       if(!age) return alert('age is required');

       if(password != confirmPassword)
       return alert('password and confirm password must be same');

       const response=await axios.post('http://localhost:3000/signup',data);

       alert(response.data.message);

       return response.data.status;

    } catch (error) {
        console.log(error.message);
    }
}

export default signup;