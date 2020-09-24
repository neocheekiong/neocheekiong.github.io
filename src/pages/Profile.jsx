import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBMask, MDBCard, MDBCardHeader, MDBCardImage, MDBCardBody, MDBCardText, MDBIcon } from "mdbreact";
import Timeline from "./Timeline";

const Profile = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol style={{padding: 0}}>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(/img/profile-banner.png)`, 'background-position': 'center' }}>
              <MDBMask overlay="cyan-light">
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold banner-secondary">Profile</MDBCardTitle>
                  <p className="mx-5 mb-5">Adept in MERN stack
                  </p>
                </MDBCol>
              </MDBMask>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg='3'>
          <MDBCard collection color='indigo darken-4'>
            <MDBCardBody>
              <MDBCardHeader>
                <MDBCardTitle className='cyan-text text-center'>About Me</MDBCardTitle>
              </MDBCardHeader>
              <MDBCardImage src='/img/profile-picture.png' className="img-fluid" color />
              <MDBCardText className='cyan-text text-center'>
                <MDBCardTitle>
                  Main Frameworks Used
                </MDBCardTitle>
                <h5>Javascript</h5>
                <ul style={{'list-style': 'none', padding:0}}>
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
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='9'>
          <Timeline></Timeline>  
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Profile;
