"use client";
import { useState } from "react";

function NavLink({ href, children, style }) {
  const [hover, setHover] = useState(false);
  const linkStyle = {
    margin: "0.25rem 0",
    color: hover ? "#00bfff" : "#fff",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontWeight: 500,
    cursor: "pointer",
    ...style,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

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
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
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
              src="/pictures/Ghurab_Logo.jpg"
              alt="Al-Ghurab Ventures Logo"
              width={160}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "28px",
            height: "22px",
            cursor: "pointer",
            zIndex: 101,
            marginLeft: "8px", // move left for visibility
          }}
        >
          <span
            style={{
              height: "3px",
              width: "100%",
              background: "#1e90ff",
              borderRadius: "2px",
              transition: "all 0.35s ease",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            style={{
              height: "3px",
              width: "100%",
              background: "#1e90ff",
              borderRadius: "2px",
              transition: "all 0.35s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              height: "3px",
              width: "100%",
              background: "#1e90ff",
              borderRadius: "2px",
              transition: "all 0.35s ease",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </div>

        {/* Dropdown Links */}
        <div
          style={{
            position: "absolute",
            top: "120%",
            right: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            pointerEvents: menuOpen ? "auto" : "none",
            gap: "0.5rem",
          }}
        >
          {links.map((text, index) => (
            <NavLink
              key={index}
              href={`/${text.toLowerCase()}`}
              style={{
                background: "#1e90ff",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                width: "150px",
                textAlign: "center",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(-20px)",
                transition: `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`,
              }}
            >
              {text}
            </NavLink>
          ))}
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
