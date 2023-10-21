import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm striving for innovative solutions to tackle complex issues and improve the user experience while being a passionate advocate of software development. With a strong foundation in programming languages and software engineering principles, I am dedicated to continuously learning and improving my skills to stay up-to-date with the latest technologies and industry trends.
              <br />
              <br />
              <br />
              <br />
              I'm a passionate and driven individual with a strong inclination towards developing and innovating new software and applications. With a keen interest in technology and a creative mindset, I constantly seek opportunities to harness my skills and knowledge to create groundbreaking solutions in the world of software development. My journey in software development is marked by a genuine enthusiasm for exploring cutting-edge technologies, programming languages, and frameworks. I actively engage in self-learning, continuously expanding my skill set to stay at the forefront of industry advancements. Through personal projects, coding challenges, and open-source contributions, I have honed my coding abilities and gained proficiency in various programming languages such as Python, Java, C++, RUST or any other language of my choice.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yaswanthreddytadipatri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tadipatri-yaswanth-reddy-2a6711183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
