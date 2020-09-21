import React, { useState } from 'react';
import './styles/App.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/Profile';


function App() {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const clickToCollapse = (event) => {
    setCollapse(true);
  }

  return (
    <div className='cool-primary'>
        <header>
          <Router>
            <MDBNavbar color='indigo darken-3' fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>CKNeo</strong>
              </MDBNavbarBrand>
              {isWideEnough && <MDBNavbarToggler onClick={clickToCollapse} />}
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#profile">Profile</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Hobbies & Interests</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="/img/banner.png">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h1 className='banner-primary'>Neo Chee Kiong</h1>
              <h5 className='banner-secondary'>Software Developer</h5>
            </MDBMask>
          </MDBView>
        </header>

        <main>
            <MDBContainer className="text-center my-5 cyan-text">
              <blockquote align="center" className='blockquote-primary'>I have been playing around computers ever since I can remember. After a long winding route, I am finally back where I belong.</blockquote>
            </MDBContainer>
          
        </main>

        <section id='profile'>
          <Profile></Profile>
        </section>
        
        
      </div>
  );
}

export default App;