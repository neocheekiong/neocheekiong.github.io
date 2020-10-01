import React from 'react'
import { 
  MDBCol, 
  MDBContainer, 
  MDBJumbotron, 
  MDBMask, 
  MDBRow, 
  MDBCardTitle, 
} from 'mdbreact'
import hobbies from './projectdata/hobbies'
import HobbyCard from './HobbyCard'

function Hobbies() {
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className='p-0'>
              <MDBCol className="text-white text-center py-5 px-4 my-5" 
                    style={{ 
                    backgroundImage: `url(img/portfolio.jpg)`, 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover' 
                  }}>
                <MDBMask overlay="cyan-light">
                  <MDBCol className="py-5">
                    <MDBCardTitle 
                      className="h1-responsive pt-3 m-5 font-bold banner-secondary">
                      My Hobbies & Interests
                    </MDBCardTitle>
                  </MDBCol>
                </MDBMask>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBJumbotron className='light-blue darken-3'>
          <MDBRow>
            {
              hobbies.map((hobby, index) => {
              return <HobbyCard key={index} 
                name={hobby.name} 
                description={hobby.description}
                img={hobby.img}
              />
            })}
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
    </div>
  )
}

Hobbies.propTypes = {

}

export default Hobbies

