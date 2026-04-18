import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/header-img.svg";
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
              I developed a passion for programming and have been continuously learning and improving my skills.
              <br />
              <br />I have a solid foundation in 
              <i>
                <b className="purple"> Java, Javascript and Php. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-description" style={{ marginTop: "2rem" }}>
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple"> SKILLS </span>
            </h1>
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ marginBottom: "0.4rem" }}>
                <b className="purple">Languages: </b>
                Java, JavaScript ES6, HTML5, CSS3, PHP.
              </p>
              <p style={{ marginBottom: "0.4rem" }}>
                <b className="purple">Technologies / Frameworks: </b>
                React.js, Node.js, Express.js, MySQL, MongoDB, REST APIs, Postman.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <b className="purple">Tools: </b>
                Git, VS Code, Eclipse, Android Studio.
              </p>
              <p style={{ marginBottom: "0.4rem" }}>
                <b className="purple">AI / ML (Learning): </b>
                Python, NumPy, Pandas, Scikit-learn.
              </p>
              <p style={{ marginBottom: "0.4rem" }}>
                <b className="purple">DevOps: </b>
                Docker, GitHub Actions, CI/CD Pipelines, Linux, Nginx, AWS (EC2, S3).
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vinay7911"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/VinayMishr50014?t=iA6KtEEB64GMdTG3d5_vyQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinay-mishra-413384339/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinaymishra_7911"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
