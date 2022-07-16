import React from 'react';
import Me from "../img/me.jpg";
import { Row, Col } from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const Contact = () => {
  return (
    <>
      <h1 className="pg-title">Contact Me</h1>
      <Row className="contact-info">
        <Col lg>
          <img src={Me} alt="TAK" className="profile-img" />
        </Col>
        <Col lg>
          <h3>MR . TIN AUNG KHINE</h3>
          <h5><i>Web Developer / 3D Artist</i></h5>
          <p>Email: 28jun9@gmail.com</p>
          <p>Skype: tinaungkhine87</p>
          <p>Phone: 09 971111506</p>
        </Col>
      </Row>
    </>
  )
}
export default Contact