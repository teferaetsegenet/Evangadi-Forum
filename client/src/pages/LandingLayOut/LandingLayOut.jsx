import React from 'react'
import Header from '../../components/Header/Header'
import bg from "../../assets/bg-svg-f.svg"

function LandingLayOut() {
    return (
        <section>
            < Header />
        <main 
        className="landing bg-body-tertiary" 
        style={{
        background: `url(${bg})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" }}>

<section className='container d-md-flex'>
{/* form login/sign-up */}

<LogIn /> 

{/* form welcome message */}

<div className='col'>
    <p className='text-warning fw-semibold'>About</p>
    <h1 className='fw-bold' >Evangadi Networks Q$A</h1>

    <div className='d-flex flex-column '>

        <p>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!</p>
        <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
    </div>

    <div>
    <button className='btn btn-warning text-white fw-bold ' style={{background:"#fe8402"}}>HOW IT WORKS</button>
    </div>

</div>
</section>
        </main>
        </section>
    );
};

export default LandingLayOut