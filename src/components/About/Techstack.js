import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import ReactTooltip from "react-tooltip";
import './tooltip.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Java">
        <DiJava />
      </Col>
      <ReactTooltip className="custom-tooltip" />
    </Row>
  );
}

export default Techstack;
