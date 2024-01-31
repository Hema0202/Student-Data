// let obj = {
//   _id: "657fe7d74e3ce23ff0f64373",
//   name: "Rahul",
//   age: 23,
//   password: "rahul@123",
//   email: "dkvjldsvdlkvlkdrahul123@gmail.com",
//   qualification: "graduate",
//   gender: "male",
//   createdAt: "2023-12-18T06:33:59.623Z",
//   updatedAt: "2023-12-18T06:33:59.623Z",
//   __v: 0,
// };

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Person3Icon from "@mui/icons-material/Person3";
import "./Card.css";

export default function card({obj}) {
  return (
      <div className="card">
        <div className="card-contains">
        {obj?.gender == "male" ? (
            <PersonIcon className="icon" fontSize="large" />
          ) : (
            <Person3Icon className="icon" fontSize="large" />
          )}
          <div className="name field">
            <div className="title">Name:</div>
            <div className="value">{obj.name}</div>
          </div>

          <div className="age field">
            <div className="title">Age:</div>
            <div className="value">{obj.age}</div>
          </div>
          <div className="email field">
            <div className="title">Name:</div>
            <div className="value">{obj.name}</div>
          </div>
          <div className="qualification field">
            <div className="title">Degree:</div>
            <div className="value">{obj.qualification}</div>
          </div>
          <div className="name field">
            <div className="title">Name:</div>
            <div className="value">{obj.name}</div>
          </div>
          <div className="gender field">
            <div className="title">Gender:</div>
            <div className="value">{obj.gender}</div>
          </div>
        </div>
      </div>
  );
}
