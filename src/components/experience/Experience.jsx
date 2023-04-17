import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience" >
      
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">




          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>

              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              
              </div>

            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>jquery</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>AWS(Amazon Web Services)</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Terraform</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

           
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>GitHub-Action</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>GitHub-Runner</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          
 



          



          </div>
        </div>











{/* Backend */}


        <div className='experience__backend'>


        <h3>Backend Development</h3>
          <div className="experience__content">

                       
          <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                
              <h4>NodeJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Express Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>

              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Kubernetes</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>


          </div>



        </div>
      </div>



    </section>
  )
}

export default experience
