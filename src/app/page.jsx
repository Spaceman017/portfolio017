"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ButtonLink from "./components/ButtonLink";

export default function Home() {
  const [hoverCard, setHoverCard] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url('/pictures/fold-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {/* Info Card */}
        <section
          style={{
            flex: "1 1 350px",
            padding: "2rem",
            maxWidth: "800px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: 8,
            border: hoverCard ? "2px solid #0047AB" : "2px solid black",
            boxShadow: hoverCard
              ? "0 15px 25px rgba(0, 71, 171)"
              : "0 10px 20px rgba(0, 71, 171)",
            transition:
              "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
            transform: hoverCard ? "scale(1.05)" : "scale(1)",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1
            style={{
              color: "#0047AB",
              marginBottom: "0.5rem",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)", // responsive font size
            }}
          >
            Welcome to Al-Ghurab Ventures
          </h1>

          <p
            style={{
              lineHeight: 1.6,
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              margin: "0.5rem 0",
              color: "black"
            }}
          >
            A starting up software development company, started by a soul
            developer with an ambition to develop an app that revolves around
            the world of automobile.
          </p>

          <p
            style={{
              marginTop: "1rem",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              color: "black"
            }}
          >
            I am actively learning modern tools like React and Next.js and aim
            to deliver practical, user-friendly apps as I grow.
          </p>

          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <ButtonLink href="/about">About Me</ButtonLink>
            <ButtonLink href="/projects">My Projects</ButtonLink>
          </div>
        </section>
      </main>

      {/* Responsive fixes */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            background-attachment: scroll;
          }

          section {
            padding: 1.5rem;
          }

          p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
