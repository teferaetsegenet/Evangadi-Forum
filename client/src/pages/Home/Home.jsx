import React from 'react'
import Header from '../../components/Header/Header';
import { LuUserCircle2 } from "react-icons/lu";
import { LiaAngleRightSolid } from "react-icons/lia";
import Question from '../../components/Question/Question';
// import { useContext } from 'react'
// import { AppState } from '../App'


const  Home = () =>{

return (
  <>
  <Header />
<section className='bg-body-tertiary'>
  <div className='d-flex justify-content-around pt-5'>
      <button className='btn btn-primary action-btn px-5'>Ask Question</button>
    <p className='fw-semibold'> 
    <span className='text-warning'>Welcome, </span>Etsege Tefe
    </p>
  </div>

    <div className='container '>
        <h2>Questions</h2>
    <Question />
    <Question  />
    <Question  />
    <Question  />
    <Question  />
    <Question  />
  </div>
</section>
</>
  );
}

export default Home