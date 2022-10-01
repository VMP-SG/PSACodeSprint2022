import React, { useEffect, useState } from "react";
import AccountBackground from "../../assets/AccountBackground.png";

export default function AccountPage({ children }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${AccountBackground.src})`,
    width: "100%",
    height: "624px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };
  const transparencyStyle = {
    width: "100%",
    height: "624px",
    background: "rgba(0, 0, 0, 0.3)",
  };
  return (
    <div style={backgroundImageStyle}>
      <div style={transparencyStyle}>{children}</div>
    </div>
  );
}
