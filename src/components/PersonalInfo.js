import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Menu(props) {
  return (
    <Row>
      <Col>
        <Card id="personalInfo">
          <Card.Header as="h5">Datos Personales</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <span>
                  <strong>DNI: </strong>35157219
                </span>
                <br></br>
                <span>
                  <strong>Edad: </strong> 29 años
                </span>
                <br></br>
                <span>
                  <strong>Fecha de Nacimiento: </strong> 27/04/1990
                </span>
                <br></br>
                <span>
                  <strong>Estado Civil: </strong> Soltero
                </span>
              </Col>
              <Col>
                <span>
                  <strong>Domicilio: </strong> Duilio Georgetti 130, Cafferata.
                </span>
                <br></br>
                <span>
                  <strong>Localidad: </strong> Alta Gracia, Córdoba, Argentina.
                </span>
                <br></br>
                <span>
                  <strong>Contacto: </strong> 03547-15477831
                </span>
                <br></br>
                <span>
                  <strong>Email: </strong> lucolmos@gmail.com
                </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Menu;
