import React from "react";
import { Col, Image, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import image from "../assets/img/foto5_Cara.jpg";
import Avatar from "react-avatar";

function Name(props) {
  return (
    <Row xs={8} md={8} className="media" id="name">
      <Col className="divPhoto">
        <Avatar src={image} className="" alt="" round={true} size="120" />
      </Col>
      <div class="w-100"></div>
      <Col>
        <div className="media-body">
          <h5 className="mt-0 Name">LUCAS MAXIMILIANO OLMOS</h5>
          <span>
            <img src="https://img.icons8.com/color/24/000000/working-with-a-laptop.png" />{" "}
            <strong>
              <i>Analista Desarrollador .Net en DICSYS para IVECO</i>
            </strong>
          </span>
          <br></br>
          <div className="divIconName">
            {["bottom"].map((placement) => (
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
            {["bottom"].map((placement1) => (
              <>
                <OverlayTrigger
                  key={placement1}
                  placement={placement1}
                  overlay={
                    <Tooltip id={`tooltip-${placement1}`}>GitHub</Tooltip>
                  }
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
        </div>
      </Col>
    </Row>
  );
}

export default Name;
