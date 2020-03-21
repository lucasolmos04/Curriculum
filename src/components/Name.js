import React from "react";
import { Col, Image } from "react-bootstrap";
import image from "../assets/img/FotoPersonal_.jpeg";

function Name(props) {
  return (
    <div className="media">
      <Col xs={4} md={3}>
        <Image
          src={image}
          className="align-self-center mr-3 Photo"
          alt=""
          roundedCircle
        />
      </Col>
      <div className="media-body">
        <h5 className="mt-0 Name">LUCAS MAXIMILIANO OLMOS</h5>
        {/* <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p className="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p> */}
      </div>
    </div>
  );
}

export default Name;
