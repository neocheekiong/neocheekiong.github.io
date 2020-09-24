import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdbreact'
import React from 'react'

export default function JobCard({ job, period, responsibilities }) {
  return (
    <MDBCard>
      <MDBCardHeader>
        <MDBCardTitle>
          {job + period}
        </MDBCardTitle>
        <MDBCardBody>
          <ul>
            {responsibilities.map(responsibility => <li>{responsibility}</li>)}
          </ul>
        </MDBCardBody>
      </MDBCardHeader>
    </MDBCard>
  )
}
