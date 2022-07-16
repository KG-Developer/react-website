import React from 'react';
import { ListGroup } from "react-bootstrap";

const Education = () => {
  return (
    <div>
      <h1 className="pg-title">Education</h1>

      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">3D MODELING</div>
            Zbrush <br />
            SAT Entertainment <br />
            Yangon, Myanmar
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">DIPLOMA IN SOFTWARE ENGINEERING</div>
            Software Engineering <br />
            University of Yangon <br />
            Yangon, Myanmar
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">BACHELOR OF SCIENCE</div>
            Physics <br />
            University of Distance Education, Yangon
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Education
