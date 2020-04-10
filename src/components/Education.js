import React from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import icoUtn from "../assets/img/UTN_logo.ico";

function Education(props) {
  return (
    <Row>
      <Col>
        <Card id="education">
          <Card.Header as="h5">
            Educación{" "}
            <img src="https://img.icons8.com/color/24/000000/student-male--v1.png" />
          </Card.Header>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>
                  UTN - FRC{" "}
                  <Image
                    src={icoUtn}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
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
                <Card.Title>
                  UTN - FRC{" "}
                  <Image
                    src={icoUtn}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
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
