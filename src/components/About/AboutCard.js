import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Vojtěch Janota </span>
            from <span className="purple"> Zlín, Czech Republic</span>
            <br /> I am a third year student enrolled on Stredni Skola Baltaci in Zlín. After graduation I will probably aim for high school degree. But still not sure what kind of degree should I go for, since im guy who can´t decide.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              Playin football with my friends
            </li>
            <li className="about-activity">
              Listenin to music 
            </li>
            <li className="about-activity">
              Nature and travelin
            </li>
            <li className="about-activity">
              Games with friends
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
