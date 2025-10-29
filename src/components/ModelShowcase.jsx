import React, { useState, useRef } from "react";
import "../styles/modelShowcase.scss";
import modelAI from "../assets/model.glb";
import modelVR from "../assets/model2.glb";
import modelApp from "../assets/model3.glb";

const ModelShowcase = () => {
  const models = [
    {
      id: "ai",
      name: "AI Assistant",
      src: modelAI,
      description: "A 3D visualization of my AI-driven assistant architecture.",
    },
    {
      id: "vr",
      name: "VR Training Scene",
      src: modelVR,
      description:
        "Interactive VR simulation model showcasing Unity-based training environments.",
    },
    {
      id: "app",
      name: "Mobile App Prototype",
      src: modelApp,
      description: "A product concept demonstrating app UX in 3D space.",
    },
  ];

  const [activeModel, setActiveModel] = useState(models[0]);
  const modelRef = useRef(null);

  const handleZoom = (factor) => {
    const viewer = modelRef.current;
    if (!viewer) return;

    // Adjust zoom distance
    const cameraOrbit = viewer.getCameraOrbit();
    const newRadius = Math.max(
      1,
      Math.min(cameraOrbit.radius * factor, 30) // Clamp zoom range
    );
    viewer.cameraOrbit = `${cameraOrbit.theta}rad ${cameraOrbit.phi}rad ${newRadius}m`;
  };

  return (
    <section className="model-showcase text-center py-5">
      <h2 className="section-title">3D Interactive Showcase</h2>
      <p className="section-subtitle">
        Explore my 3D creations interactively. Select a model to view and
        interact.
      </p>

      <div className="model-selector">
        {models.map((model) => (
          <button
            key={model.id}
            className={`model-tab ${
              activeModel.id === model.id ? "active" : ""
            }`}
            onClick={() => setActiveModel(model)}
          >
            {model.name}
          </button>
        ))}
      </div>

      <div className="model-container">
        <model-viewer
          ref={modelRef}
          src={activeModel.src}
          alt={activeModel.name}
          auto-rotate
          camera-controls
          rotation-per-second="20deg"
          style={{ width: "100%", height: "500px" }}
          ar
          ar-modes="webxr scene-viewer quick-look"
          interaction-prompt="auto"
        ></model-viewer>

        {/* Zoom Controls
        <div className="zoom-controls">
          <button onClick={() => handleZoom(0.9)}>+</button>
          <button onClick={() => handleZoom(1.1)}>-</button>
        </div> */}
      </div>

      <p className="model-description">{activeModel.description}</p>
    </section>
  );
};

export default ModelShowcase;
