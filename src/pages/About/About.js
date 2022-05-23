import React from "react";

function About() {
  return (
    <div
      className="card mx-auto"
      style={{
        width: "18rem",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">Translator</h5>
        <h6 className="card-subtitle mb-2 text-muted">Marcin Panuś</h6>
        <p className="card-text">
          A simple translator for seven European languages written in React,
          styled with Bootstrap
        </p>
        <a href="https://github.com/MarcinPanus" className="card-link">
          My github
        </a>
        <a
          href="https://www.linkedin.com/in/marcin-panu%C5%9B-3b353a223"
          className="card-link"
        >
          My linkedin
        </a>
      </div>
    </div>
  );
}

export default About;
