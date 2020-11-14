import React from "react";
import { Row, Card, Col, Image, Badge } from "react-bootstrap";
import icoUtn from "../assets/img/UTN_logo.ico";
import icoIncluit from "../assets/img/incluit.ico";
import icoUdemy from "../assets/img/udemy.ico";

function FurtherTrining(props) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header as="h5">
            Formación Complementaria{" "}
            <img src="https://img.icons8.com/color/24/000000/classroom.png" />
          </Card.Header>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>
                  Udemy{" "}
                  <Image
                    src={icoUdemy}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
                <Card.Subtitle>
                  Master en ASP .NET Core y Reack Hooksen Azure{" "}
                  <Badge variant="success">Nuevo</Badge>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Curso de ASP .NET Core, Entity Framework. Reack Hooks y
                  Material Design. Deploy en Micorsoft Azure.
                  <br></br>
                  08/2020.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  Udemy{" "}
                  <Image
                    src={icoUdemy}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
                <Card.Subtitle>
                  React JS: La biblioteca de JS creada por Facebook.
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Primeros pasos en Reack Js, hooks, componentes, props y
                  navagación con React Router Dom
                  <br></br>
                  02/2020.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  IncluIT{" "}
                  <Image
                    src={icoIncluit}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
                <Card.Subtitle>Curso Node Js</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Curso introductorio a los a los temas básicos de Node JS.
                  <br></br>
                  09/2019. Córdoba.
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  Academia Cisco Oracle - UTN FRC{" "}
                  <Image
                    src={icoUtn}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
                <Card.Subtitle>Curso de Java 6 SE</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Curso introductorio a los temas básicos de Java.
                  <br></br>
                  2013.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Instituto Leading Training Corporation</Card.Title>
                <Card.Subtitle>Curso de Reparación de PC</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Reparación de Notebooks, PC de escritorio. Mantenimiento de
                  software y hardware.
                  <br></br>
                  2013. Córdoba.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default FurtherTrining;
