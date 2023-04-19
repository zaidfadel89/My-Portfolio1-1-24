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
    title:'ChangeTheWorld',
    github:'https://github.com/progject-3/project-3',
    demo: 'https://zaidfadel89.github.io/ChangeTheWord/'
  },

  {
    id:4,
    image:IMG4,
    title:'Premiere',
    github:'https://github.com/zaidfadel/newProject-2',
    demo: 'https://zaidfadel89.github.io/Premiere/'
    },

  {
    id:5,
    image:IMG5,
    title:'Any Time Is Train Time',
    github:'https://github.com/zaidfadel89/Train-7_app.index',
    demo: 'https://zaidfadel89.github.io/Train-7_app.index/'

  },

  {
    id:6,
    image:IMG6,
    title:'Crystal Collector',
    github:'https://github.com/zaidfadel89/unit_4_Game.index',
    demo: 'https://zaidfadel89.github.io/unit_4_Game.index/'


  },
  {
    id:7,
    image:IMG3,
    title:'ClickyGame',
    github:'https://github.com/zaidfadel89/ClickyGame_build_with_ReactJS',
    demo: 'https://zaidfadel89.github.io/ClickyGame_build_with_ReactJS/'


  },
  {
    id:8,
    image:IMG2,
    title:'Moody',
    github:'https://github.com/Moody-Project/Moody-Music',
    demo: 'https://moody-project.github.io/Moody-Music/'


  },

  
  {
    id:9,
    image:IMG1,
    title:'Harry Potter Trivia Game',
    github:'https://github.com/zaidfadel89/Trivia_Game2.index',
    demo: 'https://zaidfadel89.github.io/Trivia_Game2.index/'


  }

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
