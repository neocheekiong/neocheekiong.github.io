import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBMask } from "mdbreact";
import Timeline from "./Timeline";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol style={{padding: 0}}>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(/img/profile-banner.png)`, backgroundPosition: 'center' }}>
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
          <ProfileCard></ProfileCard>
        </MDBCol>
        <MDBCol lg='9'>
          <Timeline></Timeline>  
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Profile;
