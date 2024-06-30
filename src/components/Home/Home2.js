import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Juho_Logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> I </span> AM
            </h1>
            <p className="home-about-body">
              I am not CS major student, but a have been addicted to coding and I have at least learnt
              something (perhaps) 😂 
              <br />
              <br />My fluent programming languages are
              <i>
                <b className="purple"> C++, Python and Javascript. </b>
              </i>(working on having etc.)
              <br />
              <br />
              I am interested in&nbsp;
              <i>
                <b className="purple">Web and App development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning, Data Analysis, and Algorithm Optimization.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Wanna Know More about <span className="purple">Me </span>?</h1>
            <p>
              Don't hesitate to <span className="purple">Click </span>⬇️
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Juho-Ye"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junhong-ye-4a3b00284/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juho_ye/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:juhoye0930@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdAlternateEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
