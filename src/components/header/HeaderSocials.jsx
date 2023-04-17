import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";



function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/zaid-fadel-a69a0018b/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/zaidfadel89' target="_blank"><FaGithub /></a>
        <a href='https://ovou.me/o/my-profile/edit-card-details/' target="_blank"><FaIdCard/></a>
      
    </div>
  )
}

export default HeaderSocials
