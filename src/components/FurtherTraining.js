import React from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import icoUtn from "../assets/img/UTN_logo.ico";
import icoIncluit from "../assets/img/incluit.ico";

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
                  Incluit{" "}
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
                <Card.Subtitle>Conferencia</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Conferencia Colaboración en línea y Computación en la nube -
                  del Email
                  <br></br>
                  13/08/2013
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  UTN - Facultad Regional La Plata{" "}
                  <Image
                    src={icoUtn}
                    width="20"
                    className="icoUTN"
                    alt=""
                    roundedCircle
                  />
                </Card.Title>
                <Card.Subtitle>Congreso</Card.Subtitle>
                <br></br>
                <Card.Text>
                  VI Congreso Nacional de Estudiantes de la Ingeniería en
                  Sistemas de Información (CNEISI).
                  <br></br>
                  10/2012. La Plata.
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
