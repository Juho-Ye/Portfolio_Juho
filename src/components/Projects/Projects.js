import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SAFELIVE from "../../Assets/Projects/SAFELIVE.png";
import Economic_History_of_China from "../../Assets/Projects/Economic_History_of_China.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Open Source <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Always creating.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAFELIVE}
              isBlog={false}
              title="SAFELIVE"
              description="The search engine provides information on safe and affordable housing. It was built using React.js, JavaScript, HTML, CSS, and MySQL. It includes features that allow users to perform text searches, map searches, and add listings to their favorites."
              ghLink="https://github.com/Juho-Ye/SAVELIVE-Affordable-Save-Rent-in-Los-Angeles"
              demoLink="https://www.youtube.com/watch?v=Fhx7WVZT7jA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Economic_History_of_China}
              isBlog={false}
              title="Economic History of China"
              description="Visualize China's GDP, per capita GDP, and annual GDP changes from 1961 to 2022, highlighting key incidents impacting its economy using Chart.js."
              ghLink="https://github.com/Juho-Ye/cs416-Narrative_Visualization"
              demoLink="https://juho-ye.github.io/cs416-Narrative_Visualization/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
