import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiDocker,
  SiMacos,
  SiAwslambda,
  SiGooglecloud
} from "react-icons/si";
import ReactTooltip from "react-tooltip";
import './tooltip.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="MacOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Jupyter">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="AWS Lambda">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Google Cloud">
        <SiGooglecloud />
      </Col>
      <ReactTooltip style={{ width: "100%" }} /> 
    </Row>
  );
}

export default Toolstack;
