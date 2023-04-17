import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data =[
  {
    id:1,
    image:IMG1,
    title:'Vape Project ',
    github:'https://github.com/zaidfadel89/FriendFinder_app_with_ReactJS',
    demo:  'https://zaidfadel89.github.io/ManarProject/'
  },

  {
    id:2,
    image:IMG2,
    title:'Project With (HTML,CSS,JavaScript)',
    github:'https://github.com',
    demo: 'https://zaidfadel89.github.io/zaid-portfolio.index/'
  },

  {
    id:3,
    image:IMG3,
    title:'3',
    github:'https://github.com/progject-3/project-3',
    demo: 'https://github.com/progject-3/project-3'
  },

  {
    id:4,
    image:IMG4,
    title:'4',
    github:'https://github.com/zaidfadel/newProject-2',
    demo: 'https://github.com/zaidfadel/newProject-2'
    },

  {
    id:5,
    image:IMG5,
    title:'5',
    github:'https://github.com/zaidfadel89/Train-7_app.index',
    demo: 'https://zaidfadel89.github.io/Train-7_app.index/'

  },

  {
    id:6,
    image:IMG6,
    title:'6',
    github:'https://github.com/zaidfadel89/unit_4_Game.index',
    demo: 'https://zaidfadel89.github.io/unit_4_Game.index/'


  },
]







const Portfolio = () => {
  return (
   <section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className='container portfolio__container'>
  {

  data.map(({id,image , title,github,demo}) =>{
    return(
      <article key={id} className='portfolio__item'>
    <div className='portfolio__item-image'> 
    <img src={image} alt={title} />
      </div>
    <h3>{title}</h3>
    <div className='portfolio__item-cta'>
    <a href={github} className='btn'target='_blank'> Github</a>
    <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a>
   </div>
  </article>
    )
  })
}



</div>

   </section>
  )
}

export default Portfolio
