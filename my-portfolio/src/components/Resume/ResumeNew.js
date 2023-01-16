import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/matthew_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";




function ResumeNew() {
  const [width, setWidth] = useState(1200);



  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div>
      
      <Container fluid className="resume-section">
        <Row className="resume">
          <iframe className ="resume-iframe"src={ pdf }/>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
        <Button variant="primary" href={ pdf } target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download Resume
        </Button>
      </Container>
    </div>
  );
}

export default ResumeNew;


