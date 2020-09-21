import React from 'react'
import PropTypes from 'prop-types'
import { MDBCardHeader, MDBCardTitle, MDBJumbotron, MDBRow } from 'mdbreact'
import ProjectCard from './ProjectCard'
import projects from './projectdata/project-data'

function Projects(props) {

  return (
    <MDBJumbotron className='light-blue darken-3'>
      <MDBCardHeader>
        <MDBCardTitle className='text-center'>Projects</MDBCardTitle>
      </MDBCardHeader>
      <MDBRow>
        {projects.map(project => {
          return <ProjectCard title={project.title} 
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          deployment={project.deployment} />
        })}
      </MDBRow>
    </MDBJumbotron>
  )
}

Projects.propTypes = {

}

export default Projects

