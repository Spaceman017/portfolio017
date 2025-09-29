"use client";

import { useState } from "react";
import Navbar from './components/Navbar';
import ButtonLink from './components/ButtonLink';

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/assets/fold-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <Navbar />
      <main
        style={{
          maxWidth: "800px",
          margin: "2rem auto", // centers the card horizontally
          padding: "1rem",
        }}
      >
        {/* Centered info card with hover pop */}
        <section
          style={{
            padding: "2rem",
            background: "rgba(10,10,10,0.85)", // slight transparency for readability
            borderRadius: 7,
            border: hover ? "2px solid #0047AB" : "2px solid gray",
            boxShadow: hover
              ? "0 15px 25px rgba(0,0,0,0.4)"
              : "0 10px 20px rgba(0,0,0,0.3)",
            transition:
              "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
            transform: hover ? "scale(1.05)" : "scale(1)",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h1 style={{ color: "#1e90ff", marginBottom: "0.5rem" }}>
            Welcome to Al-Ghurab Ventures
          </h1>
          <p style={{ lineHeight: 1.6 }}>
            A starting up software development company, started by a soul
            developer with an ambition to develop an app that revolves around
            the world of automobile.
          </p>
          <p style={{ marginTop: "1rem" }}>
            I am actively learning modern tools like React and Next.js and aim
            to deliver practical, user-friendly apps as I grow.
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <ButtonLink href="/about">About Me</ButtonLink>
            <ButtonLink href="/projects">My Projects</ButtonLink>
          </div>
        </section>
      </main>
    </div>
  );
}
