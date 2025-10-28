import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <Card className="project-card text-light bg-dark">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && <Button variant="info" href={link} target="_blank">View</Button>}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
