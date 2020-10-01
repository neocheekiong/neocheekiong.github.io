import { MDBCardHeader, MDBCardTitle, MDBJumbotron, MDBRow } from 'mdbreact'
import React, {} from 'react'
import jobs from './projectdata/job-data'
import JobCard from './JobCard'
import education from './projectdata/education-data'


export default function Timeline() {
  return (
    <MDBJumbotron className='light-blue darken-3'>
      <MDBCardHeader className='light-blue lighten-3' style={{
            marginBottom: "3rem"
          }}>
        <MDBCardTitle className='text-center'>
          My Experience
        </MDBCardTitle>
      </MDBCardHeader>
      <MDBRow>
        {jobs.map((job, index) => <JobCard job={job} key={index}></JobCard>)}
      </MDBRow>
      <MDBRow>
        {education.map((education, index) => <JobCard job={education} key={index}></JobCard>)}
      </MDBRow>
    </MDBJumbotron>
  )
}
