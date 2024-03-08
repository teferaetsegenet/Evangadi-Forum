import { useRef } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../index.css';




// function Login() 
// {

const Login = ({setCurrentPage})=>{

  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e){
    e.preventDefault();

  const emailValue= emailDom.current.value;
  const passValue= passwordDom.current.value;
  
  if(
    !emailValue||
    !passValue 
  ){
    alert('please provide all required information')
    return;
  }
  
    try{
      const {data} = await axios.post('/users/login', {
        email: emailValue,
        password: passValue,
    });
  alert('login successfull.')

localStorage.setItem('token', data.token);

  navigate('/')
  console.log(data);

    }catch(error){
      alert('Something went wrong!')
      // alert(error?.response?.msg)
    console.log(error.response.data);
    } 
  }
  

  return (
    
  <div className='col card p-5 text-center' >

<div>
  <h3 className='m-3'>Login to your account</h3>
    <p className='mb-5'>
        Don't have an account? <a href="#" 
        onClick={()=>setCurrentPage("signup")}
        className='fw-semibold text-decoration-none text-warning text-decoration-underline'>
          Create a new account
    </a>
  </p>
    </div>

<form onSubmit={handleSubmit}>
        
      <div className='d-flex flex-column gap-3'> 
        <input  ref={emailDom} 
          type ='email'
          className= "form-control p-2" 
          placeholder= 'Your Email' 
          />
      <input  ref={passwordDom} 
          type ='password'
          className= "form-control p-2" 
          placeholder= 'Your Password'/>
          </div>

      <div className='mt-3'>
        <p className='d-flex justify-content-end'>
          <a href="#" 
          className='fw-semibold text-decoration-none text-warning '>
            Forgot Password?
            </a>
        </p>
      </div>

      <div 
      className='d-grid gap-3'>
        <button 
        className='btn btn-primary action-btn fs-5 fw-semibold'> 
        Login 
        </button>

        {/* <Link className="btn btn-primary fw-bold px-5 "style={{color:"#fe8402"}} to={"/register"}>Create an account</Link> */}

      </div>
    </form>
    <a  href="/signup" 
    className='mt-2 fw-semibold text-decoration-none text-warning text-decoration-underline'>
      Create an account?
    </a>
  </div>
);
};

export default Login;