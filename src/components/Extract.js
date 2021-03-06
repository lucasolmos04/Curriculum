import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Extract(props) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header as="h5">
            Extracto{" "}
            <img src="https://img.icons8.com/color/24/000000/contract-job.png" />
          </Card.Header>
          <Card.Body>
            <p>
              Hola!
              <img src="https://img.icons8.com/color/24/000000/hand.png" />
              Me presento soy Lucas, una persona comprometida con lo que hace,
              responsable y perseverante. Trabajar en equipo usando metodologías
              agiles es donde me siento más cómodo , dando apoyo ya sea en lo
              profesional como en lo humano. Me gusta trabajar desarrollando con
              tecnologías de Microsoft .Net especialemente en C#. En mis tiempos
              libres investigo sobre otras tecnologías como por ejemplo algunas
              librerias de Javascript puntualmente React, Angular y/o Node Js.
              Uno de los skills técnicos que acabo de sumar es el nuevo
              Framework de Microsoft .Net Core.
            </p>
            <p>
              Actualmente me encuentro desempeñando mis actividades laborales en
              Incluit S.A para un proyecto de Sancor Seguros realizando tareas
              de Full Stack en donde manejamos las tecnologias de Vue Js para el
              Front y .Net Core para el Back.
            </p>
            <center>
              <p>
                {" "}
                <i>El positivismo y ganas de aprender es mi lema.</i>
              </p>
            </center>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Extract;
