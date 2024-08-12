import React, { CSSProperties } from "react";

const UnderConstruction: React.FC = () => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "1rem",
    marginTop: "-10rem",
  };

  const paragraphStyle = {
    fontSize: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>En construction</h1>
      <p style={paragraphStyle}>
        Cette page n'est actuellement pas terminée et en construction
      </p>
    </div>
  );
};

export default UnderConstruction;
