import React from 'react'
import Header from '../../components/Header/Header';
// import { useContext } from 'react'
// import { AppState } from '../App'


const  Home = () =>{

return (
  
<section>
  <Header />
  <div className='d-flex justify-content-around pt-3 bg-body-tertiary'>
      <button className='btn btn-primary action-btn px-5'>Ask Question</button>
    <p className='fw-semibold'> <span className='text-warning'>Welcome, </span>Etsege Tefe</p>
  </div>
<div className='container'>
<h2>Questions</h2>
  <a href="">
    <hr />
      <div>
  
  
    </div>
    </a>
  </div>
</section>

  );
}

export default Home