import React from 'react'
import Services from '../components/Services';
import design from '../../public/Design.jpg'
import construction from '../../public/Construction.png'
import CTA from '../components/CTA'

const Projects = () => {

  const ProjectCard = ({ image, location, plot, built }) => {
    return (
      <div className="project-container">
        <img src={image} alt="" />
        <div className="overlay">
          <div className="project-location">
            <p className='text'>Location: {location}</p>
          </div>
          <div className="project-built">
            <p className='text'>Built: {built ? `${built}/SQFT` : ''}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <main className='main'>
        <Services />
        <section className='project-section'>
          <div className="project">
          {Array(6).fill().map((_, index) => (
            <div className="project-card" key={index}>
              <ProjectCard image={design} />
            </div>
          ))}
            {Array(6).fill().map((_, index) => (
            <div className="project-card" key={index}>
              <ProjectCard image={construction} />
            </div>
          ))}
          </div>
        </section>
        <CTA />
      </main>
    </>
  )
}

export default Projects