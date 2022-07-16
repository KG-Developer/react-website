import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Experiences from "../pages/Experiences";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

//Import Bootstrap Navbar
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (

    <Router>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">TIN AUNG KHINE <br /><span>Web Developer / 3D Artist</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="flex-fill"></div>
            <Nav>
              <Link className="nav-link px-3 home-link" to="/"> Home </Link>
              <Link className="nav-link px-3" to="/Experiences"> Experiences </Link>
              <Link className="nav-link px-3" to="/Skills"> Skills </Link>
              <Link className="nav-link px-3" to="/Education"> Education </Link>
              <Link className="nav-link px-3" to="/Portfolio"> Portfolio </Link>
              <Link className="nav-link px-3" to="/Contact"> Contact </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#a">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-content" style={{ minHeight: '85vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experiences" element={<Experiences />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default Header

