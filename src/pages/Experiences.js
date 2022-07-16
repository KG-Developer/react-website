import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

const Experiences = () => {
  return (
    <div>
      <h1 className="pg-title">Experiences</h1>

      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Studio Puppeteer</div>
            3D Artist
          </div>
          <Badge bg="secondary">
            Mar 2020 - Apr 2022
          </Badge>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Bluebell People (Singapore) Pte Ltd</div>
            Web Developer
          </div>
          <Badge bg="secondary">
            Oct 2014 - Dec 2017
          </Badge>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">CHARLES & KEITH (Singapore) Pte Ltd</div>
            Web Developer
          </div>
          <Badge bg="secondary">
            Mar 2013 - Apr 2014
          </Badge>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">MEDIA LANE – THE CREATIVE AGENCY</div>
            Web Developer
          </div>
          <Badge bg="secondary">
            Aug 2011 - Jul 2012
          </Badge>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">SOLVEWARE SOLUTION</div>
            Web Developer
          </div>
          <Badge bg="secondary">
            Sep 2009 - Feb 2011
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Experiences
