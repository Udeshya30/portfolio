import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaUnity,
  FaDatabase,
  FaBrain,
  FaServer,
  FaGithub,
} from "react-icons/fa";
import "../styles/skills.scss";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "HTML / CSS / SCSS", icon: <FaReact />, level: 95 },
      { name: "JavaScript / TypeScript", icon: <FaReact />, level: 85 },
    ],
  },
  {
    category: "Backend & API Development",
    skills: [
      { name: "Node.js / Express", icon: <FaNodeJs />, level: 85 },
      { name: "Python / FastAPI", icon: <FaPython />, level: 90 },
      { name: "SQL / SQLite", icon: <FaDatabase />, level: 80 },
    ],
  },
  {
    category: "AI / ML & Data",
    skills: [
      { name: "Vector Search (FAISS, Pinecone)", icon: <FaBrain />, level: 85 },
      { name: "LLMs & RAG Systems", icon: <FaBrain />, level: 90 },
      { name: "OpenAI / Mistral / LangChain", icon: <FaBrain />, level: 80 },
    ],
  },
  {
    category: "Game & XR Development",
    skills: [
      { name: "Unity 3D / C#", icon: <FaUnity />, level: 95 },
      { name: "AR / VR / MR (Oculus, ARKit)", icon: <FaUnity />, level: 90 },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git / GitHub", icon: <FaGithub />, level: 90 },
      { name: "Docker / Postman / VSCode", icon: <FaServer />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Technical Skills</h2>
          <p>Technologies I work with to build scalable and intelligent systems</p>
        </div>

        {skillsData.map((group, index) => (
          <div key={index} className="skill-category mb-5">
            <h4 className="category-title">{group.category}</h4>
            <Row>
              {group.skills.map((skill, i) => (
                <Col key={i} md={4} sm={6} xs={12} className="mb-4">
                  <Card className="skill-card shadow-sm border-0">
                    <Card.Body className="text-center">
                      <div className="icon-wrapper">{skill.icon}</div>
                      <h5>{skill.name}</h5>
                      <ProgressBar
                        now={skill.level}
                        label={`${skill.level}%`}
                        className="progress-bar-custom"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
