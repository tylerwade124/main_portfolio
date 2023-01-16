import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          As a seasoned tradesman and experienced crew leader, I bring a unique blend of practical skills and technical expertise to my role as a software engineer. My dedication to continuous learning and problem-solving, combined with my ability to effectively collaborate with team members, allows me to deliver thoughtful solutions and valuable insights to any project. I am driven by my passion for using technology to create real-world impact.
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
