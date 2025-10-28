import React from "react";
import "../styles/projects.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

const projects = [
  {
    title: "Medical VR Training (Kravis)",
    description:
      "Immersive medical simulation app built in Unity 3D for Quest 2 using inside-out tracking for realistic training without external devices.",
    tech: ["Unity 3D", "C#", "Oculus SDK"],
    link: "/projects/medical-vr",
  },
  {
    title: "Architectural AI Detector",
    description:
      "AI system to detect discrepancies in architectural 3D models using Python, OpenCV, and machine learning-based feature extraction.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "/projects/architectural-ai",
  },
  {
    title: "Worklytic AI Assistant",
    description:
      "An intelligent productivity and wellness assistant with stress relief, Pomodoro timers, and emotion-based feedback — built in React and Python.",
    tech: ["React.js", "FastAPI", "Generative AI"],
    link: "/projects/worklytic",
  },
  {
    title: "Lip Reading AI",
    description:
      "Deep learning model combining CNN and LSTM for reading lips from live webcam feed — trained on hours of English pronunciation videos.",
    tech: ["TensorFlow", "LSTM", "Computer Vision"],
    link: "/projects/lipreading-ai",
  },
  {
    title: "ADA Training Center Evaluation System",
    description:
      "iPad-based interactive system for training and evaluation, featuring UI mockups, wireframes, and data-driven reports.",
    tech: ["React Native", "Figma", "Bootstrap"],
    link: "/projects/ada-training",
  },
  {
    title: "AI Scheduling Chatbot",
    description:
      "Modular Django-based chatbot powered by FAISS and LLMs to handle scheduling queries with smart context understanding.",
    tech: ["Django", "FAISS", "LLM"],
    link: "/projects/scheduler-ai",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <Container>
        <h2 className="page-title text-center mb-5">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <div className="project-card">
                <div className="card-content">
                  <h5>{project.title}</h5>
                  <p className="description">{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <Button variant="link" href={project.link}>
                    View Details →
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
