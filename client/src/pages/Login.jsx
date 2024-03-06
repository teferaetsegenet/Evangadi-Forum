import { useRef } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Login() {

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
    <section>
<form onSubmit={handleSubmit}>
        
        <div>
          <span>email :--- </span>
          <input  ref={emailDom} type ='email' placeholder= 'email' />
        </div>
    <br />
        <div>
          <span>password :--- </span>
          <input  ref={passwordDom} type ='password' placeholder= 'password' 
          />
        </div>
        <button type="submit"> Login </button>
    </form>
  <Link to={"/register"}>Register</Link>
    </section>
  );
}

export default Login;