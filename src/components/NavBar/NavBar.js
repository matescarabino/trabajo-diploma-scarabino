import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div>   
      <h2>Trabajo de Diploma</h2> 
      <div className='topNav'>
        <nav className="navMenu">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Work</a>
        <a href="#">About</a>
        </nav>
      </div>
    </div>
  ) 
} 

export default NavBar