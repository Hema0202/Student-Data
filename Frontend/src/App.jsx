import "./App.css";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Card from "./Components/Card/Card";
import Student from "./pages/Student/Student";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Signup /> */}
      {/* <Login></Login> */}
      {/* <Card></Card> */}
      {/* <Student /> */}
      {/* <div>hii</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="student" element={<Studeny/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
