import axios from 'axios';

async function getAllStudentData(){
    try {
       let token = localStorage.getItem('token');
       let students = await axios.get('http://localhost:3000/student',{
        headers:{
            'x-api-key':token
        }
       });
       console.log(students.data.data);
       if(students.data.status == true)
       return students.data.data;
    else return [];
    } catch (error) {
       console.log(error.message); 
    }
}
export default getAllStudentData;