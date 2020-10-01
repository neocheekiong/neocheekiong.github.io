import React, { useState } from 'react';
import './styles/App.css';
import { 
  MDBNavbar,
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBNavItem, 
  MDBContainer, 
  MDBMask, 
  MDBView, 
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/Profile';
import { 
  Link, 
  Element, 
  animateScroll as scroll 
} from 'react-scroll';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Hobbies from './pages/Hobbies'


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
                  <Link onClick={scroll.scrollToTop} className='nav-link' to='#'>Home</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='projects' smooth={true} className='nav-link'>Projects</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='profile' smooth={true} className='nav-link'>Profile</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="hobbies" smooth={true} className='nav-link'>Hobbies & Interests</Link>
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

      <section>
        <Element name='projects'>
          <Projects></Projects>
        </Element>
      </section>

      <section className='pb-4'>
        <Element name='profile'>
          <Profile></Profile>
        </Element>
      </section>
      
      <section>
        <Element name='hobbies'>
          <Hobbies></Hobbies>
        </Element>
      </section>
      <Footer></Footer>
    </div>
        
  )
}

export default App;
