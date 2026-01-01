import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import Trendzy from "../../Assets/Projects/Trendzy.png";
import driver_drowsines from "../../Assets/Projects/driver_drowsines.jpg";
import Media from "../../Assets/Projects/Media.png";
import atm from "../../Assets/Projects/atm.jpg";
import Camera from "../../Assets/Projects/Camera.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "Black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver_drowsines}
              isBlog={false}
              title="Driver_Drowsiness"
              description="Real-time facial landmark detection using webcam. Audio alert system plays alarm when drowsiness is detected. Monitors eye blinking patterns and duration. "
              ghLink="https://github.com/Vinay7911/Drowsiness-Detection"
                techStack={["Python", "OpenCV", "Dlib"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="Virtual ATM Machine"
              description="The **Virtual ATM System in Java** is a console-based banking simulation that replicates core ATM functions like PIN authentication, balance inquiry, cash withdrawal, deposit, and transaction history, allowing users to securely manage their accounts."
              ghLink="https://github.com/Vinay7911/Virtual-ATM-Machine"
                techStack={["Java","Mysql"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trendzy }
              isBlog={false}
              title="Trendzy E-Commerce Website"
              description="Built an AI-powered voice-assisted fashion shopping platform. Enabled smart product browsing, filtering, and secure user authentication.Implemented cart and order tracking functionality with voice navigation using Web Speech API."
              ghLink="https://github.com/Vinay7911/Trendy-Store"
              techStack={["React.js", "Node.js", "MongoDB","Express.js","Javascript"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Vinay7911/Plant-AI"
              techStack={["Python","PyTorch","flask","Javascript"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Media}
              isBlog={false}
              title="Social Media Handling"
              description="Built an AI-powered voice-assisted fashion shopping platform. Enabled smart product browsing, filtering, and secure user authentication. Implemented cart and order tracking functionality with voice navigation using Web Speech API."
              ghLink="https://github.com/Vinay7911/Social-Media-Handling"
              techStack={["React.js","Node.js","MongoDB","Express.js","API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Camera}
              isBlog={false}
              title="Camera Rental Website"
              description="Developed a user-friendly website for renting cameras and accessories.Implemented features such as product listings, user registration, booking system,and payment integration. Focused on responsive design and smooth user experiencefor both customers and admins."
              ghLink="https://github.com/Vinay7911/Camera-Rental-Website"
              techStack={["Php","Xampp"]}
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
