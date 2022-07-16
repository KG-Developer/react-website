import React from 'react';
import Sidebar from '../components/Sidebar';
import Education from './Education';
import Experiences from './Experiences';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className='home-pg'>
      <Container>
        <Row>
          <Col xs lg="4" className="sidebar">
            <Sidebar />
          </Col>
          <Col>
            <Experiences />
            <Education />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home