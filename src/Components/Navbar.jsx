import React from 'react'
import LOGO from '../images/Prakash-1.png'
import '../App.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md">
    <div className="container">
        <a className="navbar-brand" href="#home"><img src={LOGO} alt="Logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light">
            <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#about">ABOUT</a>
            </li>
        
            <li className="nav-item">
            <a className="nav-link" href="#contact">CONTACT</a>
            </li>
        </ul>
        
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar