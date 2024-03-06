import React from 'react'
import "../../index.css";
import logo from "../../assets/evangadi-logo.png"





function Header() {

  return (
    <section>
      <nav class="navbar p-3 navbar-expand-lg bg-body-tertiary">
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

      <div class="collapse navbar-collapse jus"
       id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active"
             aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">How It Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </section>
  )
}

export default Header;