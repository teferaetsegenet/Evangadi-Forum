import React, { useContext } from 'react';
import "../../index.css";
import logo from "../../assets/evangadi-logo.png";
import { Link, useNavigate} from "react-router-dom";
import { AppState } from '../../App';


const Header = ()=> {
const { user, setuser, token } = useContext(AppState);
// console.log(user)
// console.log(token)

const navigate = useNavigate();

const handleLogout = ()=> {
  // clear the user and token (assuming the tken is stored in local storage)
  
  localStorage.removeItem('token');
  setuser(null);
  navigate('/login'); //redirect to the login page or any other desired page after logout
};


  return (
    <section className='stcky-top custom-stcky'>
      <nav className="navbar p-3 navbar-expand-lg ">
          <div className="container ">
              <a className="navbar-brand" href="#"><img src={logo} alt="EvangadiLogo" /></a>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end fw-semibold"
      id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link active"
            aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link" href="#">How It Works</a>
          </li>

          <li className="nav-item align-items-center d-flex">
                {user ? (
                  <Link className="nav-link" to="http://localhost:3000/login">
                    <button className='btn btn-primary fw-bold px-5 action-btn' onClick={handleLogout}>
                      Sign IN
                    </button>
                  </Link>
                ) : (
                  <Link className="nav-link" to="http://localhost:3000/login">
                  <button className='btn btn-primary fw-bold px-5 action-btn'>
                    LogOut
                  </button>
                </Link>
                )}

          {/* <li className="nav-item align-items-center ">
            <a className="nav-link" href="#"><button classNameName="btn btn-primary fw-bold px-5 action-btn">SIGN IN</button></a> */}

          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </section>
  )
}

export default Header;