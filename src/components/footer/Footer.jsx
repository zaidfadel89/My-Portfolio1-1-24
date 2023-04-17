import React from 'react'
import './footer.css'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa';
import { BsGithub } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
        
      </ul>

      <div className='footer__socials'>
     
      <a href='https://github.com/zaidfadel89'> <BsGithub /> </a>
      <a href='mailto:zfadel989@gmail.com'> <MdOutlineMail /> </a>
      <a href='https://facebook.com'> <FaFacebook /> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>

    </footer>

  )
}

export default Footer
