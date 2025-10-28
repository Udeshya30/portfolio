import React from "react";
import "../styles/about.scss";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Me</h1>
          <p className="text-muted lead">
            Blending creativity, AI, and software craftsmanship to shape the future of intelligent systems.
          </p>
        </div>

        {/* About Intro */}
        <Row className="align-items-center mb-5">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img src={profileImg} alt="Udeshya Kumar" className="about-img" />
          </Col>
          <Col md={7}>
            <p className="text-muted">
              I’m <strong>Udeshya Kumar</strong> — an <strong>AI & Generative AI Software Developer</strong> 
              passionate about designing systems that merge intelligence, creativity, and real-world impact.
            </p>
            <p className="text-muted">
              My experience spans from building <strong>LLM-powered assistants</strong> and 
              <strong> vector-based RAG systems</strong> to creating immersive <strong>Unity-based VR training</strong> 
              environments and full-stack AI applications. I focus on crafting technology that feels human, scalable, 
              and purposeful.
            </p>
            <p className="text-muted">
              Currently, I’m working on integrating <strong>AI-driven automation</strong> into complex systems, blending 
              backend intelligence with elegant front-end experiences.
            </p>
          </Col>
        </Row>

        {/* Values + Skills Snapshot */}
        <Row className="values-section text-center mb-5">
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Clean & Scalable Code</h5>
                <p>Every solution is designed with long-term maintainability and modularity in mind.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Human-Centered AI</h5>
                <p>Building AI that empowers humans — not replaces them — through thoughtful design.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Innovation through Design</h5>
                <p>Bridging creativity and data-driven insights to craft delightful user experiences.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technical Expertise */}
        <div className="skills-section py-4">
          <h2 className="text-center mb-4">Technical Expertise</h2>
          <Row>
            <Col md={6}>
              <h6>AI & ML Development</h6>
              <ProgressBar now={95} label="95%" className="mb-3" />
              <h6>Unity 3D / XR Development</h6>
              <ProgressBar now={90} label="90%" className="mb-3" />
              <h6>FastAPI / Python Backend</h6>
              <ProgressBar now={92} label="92%" className="mb-3" />
            </Col>
            <Col md={6}>
              <h6>LLM Integration / RAG Systems</h6>
              <ProgressBar now={93} label="93%" className="mb-3" />
              <h6>React & Frontend Engineering</h6>
              <ProgressBar now={88} label="88%" className="mb-3" />
              <h6>Full-Stack & System Design</h6>
              <ProgressBar now={90} label="90%" className="mb-3" />
            </Col>
          </Row>
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-5">
          <h3>Let’s Collaborate</h3>
          <p className="text-muted">
            I’m open to collaborations, research opportunities, and projects that push the boundaries of AI and software innovation.
          </p>
          <a href="/contact" className="btn btn-dark btn-lg">
            Get in Touch
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
