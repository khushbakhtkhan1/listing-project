import React from "react";

const Header = () => {
  const imagePath = "/images/header.jpg";
  return (
    <div style={{ marginBottom: 10 }}>
      <h1 className="h1">
        <img src={imagePath} alt="Header image" width="100" height="100" />
        React Hook Form
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        Performant, flexible and extensible forms with easy-to-use validation.
      </p>
      <a
        className={"preact"}
        target="_blank"
        href="https://codesandbox.io/s/preact-2zsw6?file=/src/index.js"
        style={{
          fontSize: 10,
          height: 20,
        }}
      >
        🐰 Show me the Preact version
      </a>
    </div>
  );
};

export default Header;
