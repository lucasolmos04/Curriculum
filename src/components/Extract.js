import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Extract(props) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header as="h5">Extracto</Card.Header>
          <Card.Body>
            <p>
              Persona comprometida, responsable y perseverante. Trabajar en
              equipo usando metodologías agiles es donde me siento más cómodo ,
              dando apoyo ya sea en lo profesional como en lo humano.
            </p>
            <p>
              Hablando un poco de lo técnico, me gusta investigar cosas
              relacionadas con Javascript ya sea en Angular, React o Node Js.
              Actualmente me encuentro desempeñando mis actividades laborales en
              Dicsys SA para el cliente IVECO, utilizando las tecnologías de
              Microsoft .NET Framework y Microsoft SQL Server para Base de
              Datos.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Extract;
