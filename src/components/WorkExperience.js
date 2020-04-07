import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function WorkExperience(props) {
  return (
    <Row>
      <Col id="workexperience">
        <Card>
          <Card.Header as="h5">
            Experiencia Laboral{" "}
            <img src="https://img.icons8.com/color/24/000000/working-with-a-laptop.png" />
          </Card.Header>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title> Dicsys S.A</Card.Title>
                <Card.Subtitle>
                  Analista Desarrollador .Net en IVECO
                </Card.Subtitle>
                <Card.Text>2019 - Actualmente</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  BANCOR - Banco de la Provincia de Córdoba
                </Card.Title>
                <Card.Subtitle>Desarrollador de Software .Net</Card.Subtitle>
                <Card.Text>08/2019 - 11/2019</Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Aulica - Netbel S.A</Card.Title>
                <Card.Subtitle>
                  Desarrollador de Software Full Stack .Net C#
                </Card.Subtitle>
                <Card.Text>12/2017 - 07/2019</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default WorkExperience;
