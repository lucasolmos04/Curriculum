import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Menu(props) {
  // Calculo de Cumpleaños
  function years() {
    let actualTime = new Date().toLocaleDateString();
    let cumpleaños = new Date(1990, 3, 27).toLocaleDateString();
    let aActualTime = actualTime.split("/");
    let aCumpleaños = cumpleaños.split("/");
    let yearOld = aActualTime[2] - 1 - aCumpleaños[2];
    let yearActual = aActualTime[2] - aCumpleaños[2];

    // Dia Actual = Dia Cumpleaños
    if (aActualTime[0] == aCumpleaños[0]) {
      // Mes Actual = Mes Cumpleaños
      if (aActualTime[1] == aCumpleaños[1]) {
        return yearActual;
      } else {
        if (aActualTime[1] > aCumpleaños[1]) {
          return yearActual;
        }
        return yearOld;
      }
    } else {
      if (aActualTime[1] > aCumpleaños[1]) {
        // Mes Actual > Mes Cumpleaños
        return yearActual;
      } else {
        if (aActualTime[1] == aCumpleaños[1]) {
          // Mes Actual < Mes Cumpleaños
          return yearActual;
        } else {
          return yearOld;
        }
      }
    }
  }

  return (
    <Row>
      <Col>
        <Card id="personalInfo">
          <Card.Header as="h5">
            Datos Personales{" "}
            <img src="https://img.icons8.com/color/24/000000/edit-user-male--v1.png" />
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <span>
                  <strong>DNI: </strong>35157219
                </span>
                <br></br>
                <span>
                  <strong>Edad: </strong> {years()} años
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
                  <strong>Email: </strong>
                  <a href="mailto: lucolmos@gmail.com">lucolmos@gmail.com</a>
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
