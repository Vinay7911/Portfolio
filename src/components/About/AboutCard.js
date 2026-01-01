import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Vinay Mishra</span> from{" "}
            <span className="purple">Mumbai, India</span>.
            <br />
            I am currently pursuing my B.E. in Information Technology at{" "}
            <span className="purple">
              Atharva College of Engineering, Mumbai University
            </span>.
            <br />
            I am currently working as a{" "}
            <span className="purple">PHP Developer Intern</span> at{" "}
            <span className="purple">OSMOS Multimedia Pvt. Ltd.</span> contributing to backend development 
            and the implementation of web-based applications.
            <br />
            I also completed an internship with{" "}
            <span className="purple">EduSkills Foundation</span> as an{" "}
            <span className="purple">AI: Transformative Learning Intern</span>,
            focusing on voice assistants and automation technologies.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
