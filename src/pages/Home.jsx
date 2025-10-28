// import React from "react";
// import "../styles/home.scss";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import profileImg from "../assets/profile.jpg";
// import { FaPython, FaReact, FaUnity, FaNodeJs } from "react-icons/fa";
// import { SiFastapi, SiOpencv, SiOpenai } from "react-icons/si";

// const Home = () => {
//   return (
//     <div className="home-wrapper">
//       {/* ===== HERO SECTION ===== */}
//       <section className="hero d-flex align-items-center">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6} className="text-center text-md-start">
//               <h1 className="headline">
//                 Hi, I’m <span className="highlight">Udeshya Kumar</span>
//               </h1>
//               <h3 className="subheadline">
//                 AI & Generative AI Software Developer
//               </h3>
//               <p className="description">
//                 I specialize in building intelligent and immersive software
//                 systems using <strong>Python, Unity 3D, and AI frameworks</strong>.
//                 My goal is to craft user-centered, high-performance applications
//                 that bridge creativity with technology.
//               </p>
//               <div className="cta-buttons">
//                 <Button variant="dark" className="btn-main" href="/projects">
//                   View My Work
//                 </Button>
//                 <Button
//                   variant="outline-dark"
//                   className="btn-outline"
//                   href="/contact"
//                 >
//                   Contact Me
//                 </Button>
//               </div>
//             </Col>
//             <Col md={6} className="text-center mt-5 mt-md-0">
//               <div className="profile-img-wrapper">
//                 <img src={profileImg} alt="Profile" className="profile-img" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ===== TECH STACK ===== */}
//       <section className="tech-stack py-5">
//         <Container className="text-center">
//           <h4 className="section-title">Technologies I Work With</h4>
//           <div className="tech-icons mt-4">
//             <FaPython title="Python" />
//             <FaReact title="React.js" />
//             <FaUnity title="Unity 3D" />
//             <FaNodeJs title="Node.js" />
//             <SiFastapi title="FastAPI" />
//             <SiOpencv title="OpenCV" />
//             <SiOpenai title="OpenAI / Generative AI" />
//           </div>
//         </Container>
//       </section>

//       {/* ===== FEATURED PROJECTS ===== */}
//       <section className="featured-projects py-5">
//         <Container>
//           <h4 className="section-title text-center">Featured Projects</h4>
//           <Row className="mt-4">
//             <Col md={4} className="mb-4">
//               <div className="project-card">
//                 <h5>Medical VR Training</h5>
//                 <p>
//                   Immersive medical simulation using Unity and Quest 2 for
//                   realistic procedural training.
//                 </p>
//                 <Button variant="link" href="/projects">
//                   View Project →
//                 </Button>
//               </div>
//             </Col>
//             <Col md={4} className="mb-4">
//               <div className="project-card">
//                 <h5>Architectural AI Detector</h5>
//                 <p>
//                   AI-driven system for detecting design discrepancies in 3D
//                   models using CV and Python.
//                 </p>
//                 <Button variant="link" href="/projects">
//                   View Project →
//                 </Button>
//               </div>
//             </Col>
//             <Col md={4} className="mb-4">
//               <div className="project-card">
//                 <h5>Worklytic AI Assistant</h5>
//                 <p>
//                   Floating productivity and wellness AI assistant with stress
//                   relief and scheduling intelligence.
//                 </p>
//                 <Button variant="link" href="/projects">
//                   View Project →
//                 </Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ===== ABOUT PREVIEW ===== */}
//       <section className="about-preview py-5">
//         <Container className="text-center">
//           <h4 className="section-title">About Me</h4>
//           <p className="about-text mt-3 mx-auto">
//             I’m an AI & XR developer passionate about merging artificial
//             intelligence with immersive design. My background spans Unity-based
//             simulations, LLM-driven assistants, and AI architecture solutions
//             using <strong>FastAPI, FAISS, and Mistral models</strong>.
//           </p>
//           <Button variant="dark" className="mt-3" href="/about">
//             Learn More →
//           </Button>
//         </Container>
//       </section>

//       {/* ===== CONTACT CTA ===== */}
//       <section className="contact-cta py-5">
//         <Container className="text-center">
//           <h4>Interested in collaborating?</h4>
//           <p className="mt-2 text-muted">
//             Let’s connect to build intelligent, future-ready solutions together.
//           </p>
//           <Button variant="primary" href="/contact" className="mt-3">
//             Get in Touch
//           </Button>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import "../styles/home.scss";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profileImg from "../assets/profile.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project1.jpg";

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
            <img src={profileImg} alt="Udeshya Kumar" className="about-img" />
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
