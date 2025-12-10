import React from 'react'
import "../Styles/header.css"
import {Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header-section'>
           <div className='main-header'>
        <div>
          <img src="../Assets/logo.png" alt="logo-img" className='logo-img' />
        </div>
        <div>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto d-flex justify-content-center">
                  <Nav.Link href="/">About Us</Nav.Link>
                  <Nav.Link href="/">Onboarding</Nav.Link>
                  <Nav.Link href="/">FAQ</Nav.Link>
                  <Nav.Link href="/">Testimonials</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

      </div>
    </div>
  )
}

export default Header
