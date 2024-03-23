import React from 'react'
import "../../index.css"
import logo from "../../assets/10002.png"


function Footer() {
return (
<footer className='footer-wrapper d-md-flex justify-content-around background pt-5'>
    <div className='logo-icon-wrapper'>

        <div className='logo'>
            {/* <img src={logo} alt="" /> */}

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
        </div>

            <div>
                <li> <a href="#"><img src=" " alt="" /></a></li>
                <li> <a href="#"><img src="" alt="" /></a></li>
                <li> <a href="#"><img src="" alt="" /></a></li>
        
            </div>
    </div>   

    <div>
        <h3 className='titlee'>UseFul Link</h3>
    <div>
        <li><a href="#">How it works</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Privacy policy</a></li> 
    </div>
    </div>


<div className='row'>    
    <div className=''>
        <h3 className='titlee'>Contact Info</h3>
        <p className='contact-Info'>Evangadi Networks</p>
        <p>Developed By Etsegenet T</p>
        <p>suport@etsege.com</p>
        <p>+1-202-386-2702</p>
    </div>
</div>
    </footer>
    
  )
}

export default Footer