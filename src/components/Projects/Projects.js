import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/images.jpeg";
import signature from "../../Assets/Projects/signature.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signature}
              isBlog={false}
              title="DIGITAL SIGNATURE"
              description="Designed and developed a website to facilitate the virtual signing of documents, streamlining the document execution process."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="READ & GAIN"
              description="Created a website with the objective of inspiring and encouraging users to engage in reading literatureMy personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/yaswanthreddytadipatri/Read-and-Gain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
