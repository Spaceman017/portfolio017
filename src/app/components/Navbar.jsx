"use client";
import { useState } from "react";

function NavLink({ href, children }) {
  const [hover, setHover] = useState(false);

  const linkStyle = {
    marginRight: "1rem",
    color: hover ? "#00bfff" : "#1e90ff",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontWeight: 500,
    cursor: "pointer",
  };

  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "2px solid rgba(30, 144, 255, 0.6)",
        transition: "box-shadow 0.3s ease",
      }}
      className="navbar"
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="logo-wrapper"
        >
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/pictures/Ghurab_Logo.jpg" // exact match with public/assets filename
              alt="Al-Ghurab Ventures Logo"
              width={160}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>

        {/* Navigation links */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>

      <style jsx>{`
        .logo-wrapper:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(30, 144, 255, 0.6);
        }
        .navbar:hover {
          box-shadow: 0 0 20px rgba(0, 71, 171, 0.7);
        }
      `}</style>
    </nav>
  );
}
