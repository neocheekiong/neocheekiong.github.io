import React from 'react'
import PropTypes from 'prop-types'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardText, MDBCardTitle, MDBCol, MDBIcon } from 'mdbreact'


function ProjectCard({description, title, github, deployment, technologies}) {
  return (
    <MDBCol size='3'>
      <MDBCard color='indigo darken-4'>
        <MDBCardHeader>
          <MDBCardTitle className='white-text text-center'>{title}</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody className='white-text'>
          <MDBCardText className='white-text'>
            {description}
          </MDBCardText>
          <h5>Technologies Used</h5>
          {technologies.map(tech => <li>{tech}</li>)}
        </MDBCardBody>
        <MDBCardFooter>
          <MDBBtn href={github} color='light-blue lighten-3'><MDBIcon fab icon="github" />  Repo</MDBBtn>
          <MDBBtn href={deployment}>Visit the Project</MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  )
}

ProjectCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  github: PropTypes.string,
  deployment: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string)
}

export default ProjectCard

