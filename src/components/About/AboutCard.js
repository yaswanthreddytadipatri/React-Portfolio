import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Tadipatri Yaswanth Reddy </span>
            from <span className="purple"> Banglore, India.</span>
            <br /> 
            <br />
            I'm an ambitious and driven B.Tech student pursuing Information Technology at Vellore Institute of Technology (VIT) in Vellore, India. This esteemed institution provides me with an excellent platform to nurture my passion for technology and shape my career in the ever-evolving field of IT. As a student at VIT, I have immersed myself in a comprehensive curriculum that encompasses a wide range of subjects related to Information Technology. I engage in rigorous coursework, exploring topics such as programming languages, data structures, algorithms, database management systems, software engineering, and network security. Through hands-on projects, practical assignments, and interactive sessions, I acquire a strong theoretical foundation and develop the necessary technical skills to excel in the IT industry.
            <br/><br/><br/> I'm a passionate and driven individual with a strong inclination towards developing and innovating new software and applications. With a keen interest in technology and a creative mindset, I constantly seek opportunities to harness my skills and knowledge to create groundbreaking solutions in the world of software development. My journey in software development is marked by a genuine enthusiasm for exploring cutting-edge technologies, programming languages, and frameworks. I actively engage in self-learning, continuously expanding my skill set to stay at the forefront of industry advancements. Through personal projects, coding challenges, and open-source contributions, I have honed my coding abilities and gained proficiency in various programming languages such as Python, Java, C++, RUST or any other language of my choice.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tadipatri Yaswanth Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
