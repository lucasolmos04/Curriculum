import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import image from "../assets/img/FotoPersonal_.jpeg";

function Name(props) {
  return (
    <Row className="media" id="name">
      <Col xs={4} md={3}>
        <Image
          src={image}
          className="align-self-center mr-3 Photo"
          alt=""
          roundedCircle
        />
      </Col>
      <Col>
        <div className="media-body">
          <h5 className="mt-0 Name">LUCAS MAXIMILIANO OLMOS</h5>
          <span>Analista Desarrollador .Net en IVECO para DICSYS</span>
          <br></br>
          <span>LinkeId</span>
        </div>
      </Col>
    </Row>
  );
}

export default Name;
