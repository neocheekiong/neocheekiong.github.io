import React from 'react'
import { MDBRow, MDBCol, MDBCardTitle, MDBCard, MDBCardHeader, MDBCardImage, MDBCardBody, MDBIcon } from "mdbreact";

export default function ProfileCard() {
  return (
    <MDBCard collection color='indigo darken-4'>
      <MDBCardBody className='cyan-text text-center'>
        <MDBCardHeader>
          <MDBCardTitle>About Me</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardImage src='/img/profile-picture.png' className="img-fluid" />
          <MDBCardTitle>
            Main Frameworks Used
          </MDBCardTitle>
          <h5>Javascript</h5>
          <ul style={{'listStyle': 'none', padding:0}}>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>ExpressJS</li>
          </ul>
          <MDBRow center>
            <MDBCol size='2'><a href="https://www.linkedin.com/in/neo-chee-kiong">
              <MDBIcon size='3x' fab icon="linkedin" />
            </a></MDBCol>
            <MDBCol size='2'>
              <a href="https://github.com/neocheekiong">
              <MDBIcon size='3x' fab icon="github" />
              </a>
            </MDBCol>
            <MDBCol size='2'>
              <a href="https://leetcode.com/neocheekiong/">
                <img src="img/LeetCode_logo_black.png" href="https://leetcode.com/neocheekiong/" alt="leet code" className='img-fluid'/>
              </a>
            </MDBCol>
          </MDBRow>
      </MDBCardBody>
    </MDBCard>
  )
}
