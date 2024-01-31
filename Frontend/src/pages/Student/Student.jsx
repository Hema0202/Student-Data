import React ,{ useEffect, useState }from 'react'
import './Student.css';
import getAllStudentData from "../../apis/studentAPI"
import Card from '../../Components/Card/Card';

export default function Student() {
    const [data, setData] = useState([]);
   
    async function setStudentData(){
        let studentData = await getAllStudentData();
        setData(studentData);
    }
    useEffect(()=>{
        setStudentData();
    },[])
  return (
    <div className="student-page">
        <h1>Student Data</h1>
        <hr />
        <div className="student-card-container">{
            data.map((element)=>{
                return(
                    <div className="student-card" key={element._id}>
                        <Card obj={element}/>
                    </div>
                )
            })
        }</div>
    </div>
  )
}
