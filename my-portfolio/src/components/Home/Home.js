import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tyler.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Matthew Wade</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about using Javascript and React Libraries
                to create awesome user experiences. With years of
                experience developing web applications using the latest
                front-end and back-end technologies.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
            <Button className='download-button' href="/resume">
              &nbsp;Resume
            </Button>
              <h1 className="contact-text">CONTACT</h1>
              <SocialMedia />
            </Col>

          </Row>
        </Container>
        {/* <Container>
        <div className="scrolldown">
          <p className="scrolldown-text">Scroll <br /> Down!</p>
        </div>
        </Container> */}
      </Container>
    </section>
  );
}

export default Home;
