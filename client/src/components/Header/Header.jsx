import React from 'react'
import "../../index.css";
import logo from "../../assets/evangadi-logo.png"





function Header() {

  return (
    <section>
      <nav class="navbar p-3 navbar-expand-lg ">
          <div class="container">
              <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
      <button class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end fw-semibold"
       id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item align-items-center d-flex">
            <a class="nav-link active"
             aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item align-items-center d-flex">
            <a class="nav-link" href="#">How It Works</a>
          </li>
          <li class="nav-item align-items-center ">
            <a class="nav-link" href="#"><button className="btn btn-primary fw-bold px-5 action-btn">SIGN IN</button></a>

          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </section>
  )
}

export default Header;