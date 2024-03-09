import { useRef } from 'react';
import axios from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../../index.css'





// function SignUp(){

  const SignUp = ({setcurrentPage})=>{

  const  navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

async function handleSubmit(e){
  e.preventDefault();
const usernameValue= usernameDom.current.value;
const firstValue= firstnameDom.current.value;
const lastValue= lastnameDom.current.value;
const emailValue= emailDom.current.value;
const passValue= passwordDom.current.value;

if(
  !usernameValue ||
  !firstValue ||
  !lastValue ||
  !emailValue||
  !passValue 
){
  alert('please provide all required information')
  return;
}

  try{
    await axios.post('/users/signup', {
      username:usernameValue,
      firstname: firstValue,
      lastname:lastValue,
      email: emailValue,
      password: passValue,
  });
alert('SignUp successfull. please login ')
navigate('/login')

  }catch(error){
    alert('something went wrong!')
  console.log(error.response);
  } 
}


  return (

    <div className='col card p-5 text-center' >
  <div>
  <h3 className='m-3'>Join the network</h3>
  <p className='mb-5'>
  Already have an account? <a href="#" 
  onClick={()=>setcurrentPage("login")} 
  className='fw-semibold text-decoration-none text-warning '>
    Sign In</a>
  </p>
    </div>
<form onSubmit={handleSubmit}>
        
      <div className='d-flex flex-column gap-3'> 
        <input  ref={emailDom} 
          type ='email'
          className= "form-control p-2" 
          placeholder= 'Email' 
          />
<div className='d-flex gap-4'>
<input  ref={firstnameDom} 
          type ='text'
          className= "form-control p-2" 
          placeholder= 'First Name' 
          />
          <input  ref={lastnameDom} 
          type ='text'
          className= "form-control p-2" 
          placeholder= 'Last Name' 
          />
      </div>
      <input  ref={usernameDom} 
          type ='username'
          className= "form-control p-2" 
          placeholder= 'User Name'/>

      <input  ref={passwordDom} 
          type ='password'
          className= "form-control p-2" 
          placeholder= 'Your Password'/>
          </div>

    <div className='p-3'>
<small>I agree to the  <a href="#">privacy policy</a> and  aterms of service</small>
    </div>

      <div className='d-grid gap-2'>
        <button type="submit" 
        className='btn btn-primary action-btn fs-5 fw-semibold'> 
      Agree and Join 
      </button>

        <div className='mt-2'>
        <p className='d-flex justify-content-center'>
          <a href="#" 
          className='fw-semibold text-decoration-none text-warning' 
          onClick={()=>setcurrentPage("login")}>
            Already have an account?
            </a>
        </p>
      </div>
      </div>
    </form>

    {/* <a  href="/signup" className=' fw-semibold text-decoration-none text-warning text-decoration-underline'>Create an account?</a> */}

    </div> 

  );
}


export default SignUp;