import React from 'react'
import PropTypes from 'prop-types'
import { 
  MDBCard, 
  MDBCardBody,  
  MDBCardHeader, 
  MDBCardImage, 
  MDBCardText, 
  MDBCardTitle, 
  MDBCol, 
} from 'mdbreact'

function HobbyCard({ name, description, img }) {
  return (
    <MDBCol xl='3' md='4'>
      <MDBCard color='indigo darken-4'>
        <MDBCardHeader>
          <MDBCardTitle className='white-text text-center'>{name}</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardImage src={img} className='w-100'></MDBCardImage>
        <MDBCardBody className='white-text'>
          <MDBCardText className='white-text'>
            {description}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

HobbyCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
}

export default HobbyCard

