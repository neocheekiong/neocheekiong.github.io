import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCol } from 'mdbreact'
import React from 'react'

export default function JobCard({ job }) {
  const { title, start, end, description } = job;
    return (
      <MDBCol xl='4' md='4'>
        <MDBCard color='indigo darken-4'>
          <MDBCardHeader>
            <MDBCardTitle className='white-text text-center'>
              {`${title} ${start}-${end}`}
            </MDBCardTitle>
            <MDBCardBody className='white-text'>
              <ul>
                {description.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </MDBCardBody>
          </MDBCardHeader>
        </MDBCard>
      </MDBCol>
    
  )
}
