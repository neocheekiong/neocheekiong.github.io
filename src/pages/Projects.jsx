import React from 'react'
import { MDBMask, MDBCardHeader, MDBCardTitle, MDBCol, MDBContainer, MDBJumbotron, MDBRow } from 'mdbreact'
import ProjectCard from './ProjectCard'
import projects from './projectdata/project-data'

function Projects() {

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='p-0'>
            <MDBCol className="text-white text-center py-5 px-4 my-5" 
                    style={{ 
                    backgroundImage: `url(/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg)`, 
                    backgroundPosition: 'center' 
                  }}>
              <MDBMask overlay="cyan-light">
                <MDBCol className="py-5">
                  <MDBCardTitle 
                    className="h1-responsive pt-3 m-5 font-bold banner-secondary">
                    My Projects
                  </MDBCardTitle>
                  
                </MDBCol>
              </MDBMask>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      
      <MDBJumbotron className='light-blue darken-3'>
        <MDBCardHeader color='light-blue lighten-3'
          style={{
            marginBottom: "3rem"
          }}>
          <MDBCardTitle className='text-center black-text'>Projects</MDBCardTitle>
        </MDBCardHeader>
        <MDBRow>
          {projects.map((project, index) => {
            return <ProjectCard key={index} 
            title={project.title} 
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            deployment={project.deployment} />
          })}
        </MDBRow>
      </MDBJumbotron>
    </MDBContainer>
  )
}

export default Projects

