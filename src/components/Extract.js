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
              librerias de Javascript puntualmente React, Angular y Node Js. Una
              de los skills tecnicos quiero sumar es el nuevo Framework de
              Microsoft, .Net Core.
            </p>
            <p>
              Actualmente me encuentro desempeñando mis actividades laborales en
              Dicsys SA para el cliente IVECO, utilizando las tecnologías de
              Microsoft .NET Framework, Jquery y Microsoft SQL Server para Base
              de Datos.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Extract;
