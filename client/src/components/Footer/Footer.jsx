import React from 'react'
import "../../index.css"
import  "./footer.css"
import logo from "../../assets/10002.png"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";


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

    <div className="list-inline d-flex gap-5 p-2 text-decoration-none">
        <div>
                <a href="https://www.facebook.com/"target="_blank">
                <CiFacebook className='icon' />
                    </a>
    </div>
                
    <div >
        <a
			href="https://www.instagram.com/"
				target="_blank"
				>
			<FaInstagram  className='icon'/>
				</a>
            </div>
            
    <div >
        <a
			href="https://www.youtube.com/c/"
				target="_blank"
					>
					<AiOutlineYoutube className='icon' />
				</a>
            </div>
        </div>
    </div>   

    <div>
        <h3 className='titlee pb-4'>UseFul Link</h3>
    <div className="list-inline ">

    <ul className='list-menu'>
        <li><a href="#" className='text-white text-decoration-none'>How it works</a></li>
        
        <li><a href="#"className='text-white text-decoration-none'>Terms of service</a></li>
        <li><a href="#"className='text-white text-decoration-none'>Privacy policy</a>
        </li> 
        </ul>
    </div>
    </div>


<div className='row'>    
    <div className=''>
        <h3 className='titlee pb-3'>Contact Info</h3>
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