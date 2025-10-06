"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function NavLink({ href, children, style, onClick }) {
  const [hover, setHover] = useState(false);
  const linkStyle = {
    margin: "0 0.75rem",
    color: hover ? "#0047AB" : "#000",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontWeight: 500,
    cursor: "pointer",
    ...style,
  };
  return (
    <Link
      href={href}
      onClick={onClick}
      style={linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-wrapper">
            <Link href="/">
              <img
                src="/pictures/Ghurab_Logo.jpg"
                alt="Al-Ghurab Ventures Logo"
                width={160}
                height={80}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="desktop-links">
            {links.map((text, index) => (
              <NavLink
                key={index}
                href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              >
                {text}
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            ref={hamburgerRef}
          >
            <span />
            <span />
            <span />
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu" ref={menuRef}>
              {links.map((text, index) => (
                <NavLink
                  key={index}
                  href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        :global(body) {
          margin: 0;
          overflow-x: hidden; /* prevent horizontal scroll */
        }

        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          background: #fff;
          z-index: 50;
          border-bottom: 2px solid transparent;
          transition: box-shadow 0.3s ease, border-bottom 0.3s ease;
        }

        .navbar:hover {
          box-shadow: 0 4px 10px rgba(0, 71, 171, 0.3);
          border-bottom: 2px solid #0047AB;
        }

        .navbar-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.2rem;
          position: relative;
        }

        .logo-wrapper img {
          object-fit: contain;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .logo-wrapper:hover img {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(30, 144, 255, 0.6);
        }

        .desktop-links {
          display: flex;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 35px;
          height: 25px;
          cursor: pointer;
        }

        .hamburger span {
          height: 4px;
          width: 100%;
          background: #0047AB;
          border-radius: 2px;
          transition: all 0.35s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          max-width: 260px;
          background: #0047AB;
          display: flex;
          flex-direction: column;
          padding-top: 80px;
          padding-left: 20px;
          transition: right 0.35s ease;
          z-index: 998;
        }

        @media (max-width: 1024px) {
          .desktop-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            width: 100%;
            padding-left: 15px;
          }
        }
      `}</style>
    </>
  );
}
