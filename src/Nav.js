import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 100) {
        handleShow(true);
      }else handleShow(false);
    });
    return () =>{
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img 
            className='nav_logo' src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress" alt="Netflix Logo" 
        />

        <img 
            className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" 
        />
    </div>
  )
}

export default Nav