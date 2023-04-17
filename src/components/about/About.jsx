import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
   <section id='about' >
    <h5>Get To Know</h5>
    <h2>About Me</h2>



    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Image'/>
        </div>
      </div>



      <div className='about__content'>
        <div className='about__cards'>
          
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>


          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>



          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>

          
        </div>
        <p>
        Hi, I'm Zaid! I'm a Full Stack Web Developer with a background in math and the sciences.
I love jigsaw and logic puzzles alike. My abilities both as a quick learner and problem solver serve me well
as a computer programmer. I love being able to write code to implement creative solutions.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
