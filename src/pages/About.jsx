import React from "react";
import "../styles/about.scss";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import profileImg from "../assets/profile.jpeg";

const About = () => {
  const experiences = [
    {
      company: "Zibtek, Bengaluru",
      role: "AI & Full-Stack Developer",
      duration: "Jan 2023 – Present",
      description:
        "Leading AI-driven development across offline assistants, RAG systems, and automation pipelines with Mistral and FastAPI.",
      projects: [
        "💡 Offline AI Assistant (Mistral-7B + FAISS)",
        "📄 SiteSyncAI – OCR + RAG construction discrepancy platform",
        "🧠 Layered query system (cache → quick reply → LLM fallback)",
      ],
      tech: "FastAPI, Python, FAISS, LangChain, React, SQLite, JWT",
    },
    {
      company: "Kravis Technologies, Hyderabad",
      role: "Unity XR / AI Developer",
      duration: "Nov 2020 – Dec 2022",
      description:
        "Built immersive AR/VR prototypes integrated with NLP and AI features, deployed on Quest 2 and HoloLens.",
      projects: [
        "🎮 VR terrain visualization tool covering all of India",
        "🏭 AR factory-floor SLAM-based placement app",
        "🧩 AI-enhanced medical VR training simulation",
      ],
      tech: "Unity 3D, C#, Python, XR Toolkit, OpenCV, Quest 2",
    },
    {
      company: "Freelance / Independent",
      role: "AR & AI Developer",
      duration: "2019 – 2020",
      description:
        "Delivered AR-based industrial and scanning solutions while exploring AI-driven interaction design.",
      projects: ["📱 Vuforia-based scanner app for Kapzelet Technologies"],
      tech: "Unity, Vuforia, Android, Firebase",
    },
    {
      company: "NSIC TSC, New Delhi",
      role: "Apprentice (Industry 4.0 Prototyping)",
      duration: "Dec 2018 – Nov 2019",
      description:
        "Worked on CAD modeling, assembly design, and workflow optimization for industrial prototyping systems.",
      projects: ["⚙️ CAD assemblies and simulation modeling"],
      tech: "SolidWorks, AutoCAD, Manufacturing Tools",
    },
    {
      company: "Swastik Automech Pvt. Ltd., Faridabad",
      role: "Quality Control Engineer",
      duration: "May 2018 – Nov 2018",
      description:
        "Performed precision checks on automotive components, reducing defect rate and improving first-pass yield.",
      projects: ["🔧 Automotive part inspection and optimization"],
      tech: "Industrial QC Tools, Excel, Measurement Systems",
    },
  ];

  return (
    <section className="about-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Me</h1>
          <p className="text-muted lead">
            Blending creativity, AI, and software craftsmanship to shape
            intelligent, human-centered systems.
          </p>
        </div>

        {/* Intro */}
        <Row className="align-items-center mb-5">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img src={profileImg} alt="Udeshya Kumar" className="about-img" />
          </Col>
          <Col md={7}>
            <p className="text-muted">
              I’m <strong>Udeshya Kumar</strong> — an{" "}
              <strong>AI Engineer & Generative AI Developer</strong> with 6+
              years of experience designing intelligent systems that merge data,
              design, and real-world usability.
            </p>
            <p className="text-muted">
              My focus lies in building scalable{" "}
              <strong>LLM-powered assistants</strong>,{" "}
              <strong>retrieval-augmented generation (RAG) systems</strong>, and
              immersive <strong>Unity-based XR applications</strong> that solve
              complex problems through thoughtful engineering.
            </p>
            <p className="text-muted">
              Beyond coding, I enjoy mentoring, designing architectures, and
              integrating AI automation into everyday tools that make technology
              more intuitive.
            </p>
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="values-section text-center mb-5">
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Clean & Scalable Code</h5>
                <p>
                  Every line of code is written for clarity, reusability, and
                  long-term evolution.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Human-Centered AI</h5>
                <p>
                  I craft AI solutions that empower humans through context,
                  empathy, and intelligent interaction.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card shadow-sm border-0">
              <Card.Body>
                <h5>Innovation through Design</h5>
                <p>
                  Combining art and logic to turn technical complexity into
                  intuitive user experiences.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technical Expertise */}
        <div className="skills-section py-4 mb-5">
          <h2 className="text-center mb-4">Technical Expertise</h2>
          <Row>
            <Col md={6}>
              <h6>AI & ML Development</h6>
              {/* <ProgressBar now={95} label="95%" className="mb-3" /> */}
              <ProgressBar now={95} className="mb-3" />
              <h6>Unity 3D / XR Development</h6>
              <ProgressBar now={90} className="mb-3" />
              <h6>FastAPI / Python Backend</h6>
              <ProgressBar now={92} className="mb-3" />
            </Col>
            <Col md={6}>
              <h6>LLM Integration / RAG Systems</h6>
              <ProgressBar now={94} className="mb-3" />
              <h6>React & Frontend Engineering</h6>
              <ProgressBar now={88} className="mb-3" />
              <h6>Full-Stack & System Design</h6>
              <ProgressBar now={90} className="mb-3" />
            </Col>
          </Row>
        </div>

        {/* Experience Flow */}
        <section className="experience-flow py-5">
          <h2 className="text-center mb-5">Professional Journey</h2>
          <div className="flow-container">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flow-item ${index % 2 !== 0 ? "reverse" : ""}`}
              >
                <div className="company-box">
                  <h5>{exp.company}</h5>
                  <span>
                    {exp.role} — {exp.duration}
                  </span>
                  <p>{exp.description}</p>
                </div>
                <div className="tech-box">
                  <h6>Projects & Tech</h6>
                  <ul>
                    {exp.projects.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                    <li>
                      <strong>Tech Stack:</strong> {exp.tech}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <div className="text-center mt-5">
          <h3>Let’s Collaborate</h3>
          <p className="text-muted">
            Open to AI research, full-stack innovation, and collaborations that
            push the limits of intelligent systems.
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
