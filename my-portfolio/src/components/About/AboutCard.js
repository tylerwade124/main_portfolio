import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ENTER ABOUT ME HERE 
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
