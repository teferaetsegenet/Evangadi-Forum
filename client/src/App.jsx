import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Register from "./pages/SignUp";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig";


import LandingLayOut from "./pages/LandingLayOut/LandingLayOut";
import Home from "./pages/Home/Home";


export const AppState = createContext();

function App() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

async function checkUser(){
  const token = localStorage.getItem('token')
try{
  const {data} = await axios.get('/users/check', {

    headers: {
        Authorization: 'Bearer ' + token,
    },
  });
  setUser(data);

}catch(error) {
console.log(error.response);
navigate('/login');
}
}

  useEffect(()=>{
    checkUser();
  }, []); // adding checkUser to the deendency array 

  
  return (
    <>
    {/* // <AppState.Provider value={{user,setUser}}>
    //   <Routes> */}
    {/* //     <Route path='/' element= {<Home />} /> */}
    {/* //     <Route path='/login' element= {<Login />} /> */}
    {/* //     <Route path='/signup' element={<SignUp />} /> */}
    {/* //   </Routes> */}
    {/* // </AppState.Provider> */}
    <div>
    {/* <LandingLayOut /> */}
    <Home />
    </div>
    </>
  );
}

export default App;
