import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              <span className="wave" role="img" aria-labelledby="wave">
                 💃
                </span>
                Hello!
                <span className="wave" role="img" aria-labelledby="wave">
                 💃
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JUNHONG (JUHO) YE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <iframe
                src="https://giphy.com/embed/JqmupuTVZYaQX5s094"
                width="480"
                height="343"
                style={{ maxHeight: "450px", width: "100%" }}
                className="giphy-embed"
                allowFullScreen
                title="Giphy Embed"
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/Smolverse-smol-smolverse-swol-JqmupuTVZYaQX5s094">
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
