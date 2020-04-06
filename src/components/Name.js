import React from "react";
import { Col, Image, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import image from "../assets/img/FotoPersonal_.jpeg";

function Name(props) {
  return (
    <Row className="media" id="name">
      <Col xs={4} md={3}>
        <Image
          src={image}
          className="align-self-center mr-3 Photo"
          alt=""
          roundedCircle
        />
      </Col>
      <Col>
        <div className="media-body">
          <h5 className="mt-0 Name">LUCAS MAXIMILIANO OLMOS</h5>
          <span>
            <strong>
              <i>Analista Desarrollador .Net en IVECO para DICSYS</i>
            </strong>
          </span>
          <br></br>
          {["bottom"].map(placement => (
            <>
              <OverlayTrigger
                key={placement.id}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement.id}`}>LinkeId</Tooltip>
                }
              >
                <span>
                  <a
                    href="https://www.linkedin.com/in/lucasolmos44"
                    target="_blank"
                    title="as"
                  >
                    <ion-icon
                      class="icons"
                      name="logo-linkedin"
                      size="large"
                    ></ion-icon>
                  </a>
                </span>
              </OverlayTrigger>
            </>
          ))}
          {["bottom"].map(placement1 => (
            <>
              <OverlayTrigger
                key={placement1}
                placement={placement1}
                overlay={<Tooltip id={`tooltip-${placement1}`}>GitHub</Tooltip>}
              >
                <span>
                  <a
                    href="https://github.com/lucasolmos04"
                    target="_blank"
                    title="as"
                  >
                    <ion-icon
                      class="icons"
                      name="logo-github"
                      size="large"
                    ></ion-icon>
                  </a>
                </span>
              </OverlayTrigger>
            </>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Name;
