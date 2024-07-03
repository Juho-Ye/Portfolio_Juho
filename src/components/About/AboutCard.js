import React from "react";
import Card from "react-bootstrap/Card";
import { BiHappy } from "react-icons/bi";
import "./tooltip.css"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Junhong (Juho) Ye </span>
            from <span className="purple"> Guangzhou, China.</span>
            <br />
            I am currently looking for jobs (Full-stack Developer & Data Analyst).
            <br />
            <br />
            In addition to coding, there are other activities I'd love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BiHappy /> Dancing (Popping)
            </li>
            <li className="about-activity">
              <BiHappy /> Painting
            </li>
          </ul>

          <p style={{ color: "rgb(248 149 0)" }}>
            "Coding is a paint of imagination"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
