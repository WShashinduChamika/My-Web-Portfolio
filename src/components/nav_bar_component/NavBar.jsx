import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  
  const [isMenuClicked,setIsMenuClicked] = useState(false)

  const handleMenu = ()=>{
     setIsMenuClicked(!isMenuClicked)
  }

  useEffect(()=>{
    const navBarElement = document.querySelector('.navbar');
    if(isMenuClicked){
        navBarElement.classList.add('active');
    }else{
        navBarElement.classList.remove('active');
    }
  },[isMenuClicked])
  
  return (
    <div>
       <header className="header">
          <a href="#" className="logo">Portfolio</a>

          <div onClick={handleMenu}>
            {!isMenuClicked?
              <IoMenu id="menu-icon"></IoMenu>
              : <IoClose id="menu-icon"></IoClose>
            }
          </div>

          <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
    </div>
  )
}
