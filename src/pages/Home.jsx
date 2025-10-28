import React from "react";
import "../styles/home.scss";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profileImg from "../assets/profile.png";
import aboutProfileImg from "../assets/profile.jpeg";
import project1 from "../assets/project2.jfif";
import project2 from "../assets/project3.jfif";
import ModelShowcase from "../components/ModelShowcase";
import PlayStoreApps from "../components/PlayStoreApps";

const Home = () => {
  return (
    <section className="home-page">
      {/* Hero Section */}
      <Container fluid className="hero-section text-center py-5">
        <Container>
          <img src={profileImg} alt="Profile" className="profile-img mb-4" />
          <h1 className="fw-bold mb-2">
            Hi, I’m <span>Udeshya Kumar</span>
          </h1>
          <h4 className="text-muted mb-3">
            AI & Generative AI Software Developer
          </h4>
          <p className="lead text-secondary mb-4">
            I build intelligent software systems that blend{" "}
            <strong>AI, immersive technology, and full-stack solutions</strong>.
            My focus is to make digital experiences more human and efficient.
          </p>
          <div>
            <Button variant="dark" size="lg" href="/projects" className="me-3">
              View My Work
            </Button>
            <Button variant="outline-dark" size="lg" href="/contact">
              Contact Me
            </Button>
          </div>
        </Container>
      </Container>

      {/* About Preview */}
      <Container className="about-preview py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Me</h2>
            <p className="text-muted">
              I’m an AI software developer specializing in integrating{" "}
              <strong>machine learning</strong>, <strong>Unity 3D</strong>, and{" "}
              <strong>modern web frameworks</strong> to create innovative
              applications. My recent work includes building generative AI
              assistants, immersive training simulations, and advanced
              scheduling AI systems.
            </p>
            <Button variant="link" href="/about" className="px-0">
              Learn more →
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={aboutProfileImg}
              alt="Udeshya Kumar"
              className="about-img"
            />
          </Col>
        </Row>
      </Container>

      {/* Skills Highlights */}
      <Container className="skills-preview py-5 text-center">
        <h2 className="mb-4">What I’m Best At</h2>
        <Row>
          <Col md={4}>
            <Card className="skill-card shadow-sm border-0">
              <Card.Body>
                <h5>AI Systems & LLMs</h5>
                <p>
                  Building intelligent assistants, RAG systems, and
                  transformer-based workflows using Python, FastAPI, and
                  vector databases.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="skill-card shadow-sm border-0">
              <Card.Body>
                <h5>Immersive Tech (AR/VR/MR)</h5>
                <p>
                  Developing interactive simulations and 3D experiences using
                  Unity and C#, focusing on medical and training use cases.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="skill-card shadow-sm border-0">
              <Card.Body>
                <h5>Full-Stack & Integrations</h5>
                <p>
                  Creating robust frontends (React) and APIs (Django, Node.js)
                  with AI-driven automation and scalable cloud backends.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Projects */}
      <Container className="projects-preview py-5">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <Row>
          <Col md={6}>
            <Card className="project-card border-0 shadow-sm mb-4">
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title>AI Scheduling Assistant</Card.Title>
                <Card.Text>
                  A context-aware scheduling chatbot powered by FAISS and LLM
                  verification to handle dynamic, time-based user queries.
                </Card.Text>
                <Button variant="outline-dark" href="/projects">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card border-0 shadow-sm mb-4">
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Title>Medical VR Training System</Card.Title>
                <Card.Text>
                  Built in Unity with Quest 2’s hand tracking, enabling realistic
                  procedural training for medical professionals.
                </Card.Text>
                <Button variant="outline-dark" href="/projects">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 📱 My Play Store Apps */}
      <PlayStoreApps />

      {/* 🧊 3D Model Interaction Section */}
      <ModelShowcase />

      {/* Contact CTA */}
      <Container fluid className="contact-cta py-5 text-center">
        <h2>Let’s Build Something Innovative Together</h2>
        <p className="text-muted">
          Have an idea or opportunity? I’d love to collaborate on next-gen AI
          experiences.
        </p>
        <Button variant="dark" size="lg" href="/contact">
          Get in Touch
        </Button>
      </Container>
    </section>
  );
};

export default Home;
