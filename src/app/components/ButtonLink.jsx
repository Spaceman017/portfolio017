"use client";
import { useState } from "react";

export default function ButtonLink({ href, children }) {
  const [hover, setHover] = useState(false);
  const style = {
    display: "inline-block",
    padding: "0.55rem 1rem",
    margin: "0.5rem 0.25rem",
    borderRadius: 6,
    background: hover ? "#000000ff" : "#0047AB",
    color: "white",
    textDecoration: "none",
    transition: "all 0.2s ease",
    fontWeight: 600
  };
  return (
    <a href={href} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
}
