import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Education(props) {
  return (
    <Row>
      <Col>
        <Card id="education">
          <Card.Header as="h5">Educación</Card.Header>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title> UTN - FRC </Card.Title>
                <Card.Subtitle>
                  2015-2017
                  <br></br>
                  Tecnicatura Superior en Programación.
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  <span>Tesis: Sistema Web e-commerce.</span>
                  <br></br>
                  <span>Empresa: Amoblamientos Martinez.</span>
                  <br></br>
                  <span>Tecnologia usada: C# .NET, MVC Razor.</span>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title> UTN - FRC </Card.Title>
                <Card.Subtitle>
                  2008-2014
                  <br></br>
                  Ingeniería en Sistemas de Información.
                </Card.Subtitle>
                <br></br>
                <Card.Text>Cursado incompleto - 2do y 3er año</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Education;
