import axios from "axios";

async function login(data){
    try {
        let {email,password} =data;
        if(!email) return alert('email is required');
        if(!password) return alert('password is required');

        let response = await axios.post('http://localhost:3000/login',data);
        console.log(response.data);
       
        alert(response.data.message);

        if(response.data.status == true)
        localStorage.setItem('token',response.data.token);
     
        return response.data.status;

    } catch (error) {
        console.log(error.message);
    }
}

export default login;