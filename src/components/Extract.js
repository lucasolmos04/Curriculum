import React from "react";
import { Row, Card, Col } from "react-bootstrap";

function Extract(props) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header as="h5">Extracto</Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content. With supporting text below as a natural lead-in to
              additional content. With supporting text below as a natural
              lead-in to additional content. With supporting text below as a
              natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Extract;
