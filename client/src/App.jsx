import { Route, Routes, useNavigate } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp/SignUp";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig.jsx";
import LandingLayOut from "./pages/LandingLayOut/LandingLayOut";
import Home from "./pages/Home/Home";
import Question from "./components/Question/Question.jsx";
import Answer from "./components/Answer/Answer.jsx";


export const AppState = createContext();

function App() {

  const [users, setUsers] = useState({});
  const [question, setQuestion] = useState({});

  console.log(users) 

  const token = localStorage.getItem('token')

  const navigate = useNavigate();

async function checkUser(){
  const token = localStorage.getItem('token')
try{
  const {data} = await axios.get('/users/check', {

    headers: {
        // Authorization: 'Bearer ' + token,
        Authorization: `Bearer ${token}` },
  });
  setUsers(data);

}catch(error) {
console.log(error.response);
navigate('/login');
}
}


async function getQuestion (){
  try {
    const { data } = await axios.get('/questions/all-questions', {
      headers: { Authorization: 'Bearer ' + token,},
    });

    setQuestion(data); //asuming data hold the  Question value
  }catch (error){
    console.error('Error fetching question:', error);
  }
}

  useEffect(()=>{
    checkUser();
    getQuestion();
  }, []); // adding checkUser to the deendency array 

  
  return (
    <AppState.Provider value={{users, setUsers, question, setQuestion, token}}>
        <Routes> 
        <Route path='/Login' element= {<LandingLayOut />} /> 
        <Route path='/' element= {<Home />} />
          <Route path='/questions' element= {<Question />} /> 
          <Route path='/answer' element= {<Answer />} /> 
          </Routes> 
    </AppState.Provider> 
  );
}

export default App;
