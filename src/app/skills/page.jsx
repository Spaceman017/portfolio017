"use client";
import Navbar from '../components/Navbar';
import ButtonLink from '../components/ButtonLink';
import { useState } from 'react';
import Image from 'next/image';

export default function SkillsPage() {
  const [hoverCard, setHoverCard] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);

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
        overflowX: "hidden",
      }}
    >
      {/* Navbar now takes full width */}
      <div style={{ width: "100%" }}>
        <Navbar />
      </div>

      <main
        style={{
          maxWidth: "1200px",
          margin: "2rem auto",
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Left skills card */}
        <section
          style={{
            flex: "1 1 350px",
            padding: "1.5rem",
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
            color: "#f0f0f0",
            minWidth: "300px",
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: "#0047ab", marginBottom: "1rem" }}>Skills</h1>
          <ul style={{ color: "#000000ff", lineHeight: 1.6, paddingLeft: "1rem" }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Graphical Design</li>
          </ul>
          <div style={{ marginTop: "1.25rem" }}>
            <ButtonLink href="/projects">See Projects</ButtonLink>
          </div>
        </section>

        {/* Right-side image */}
        <div
          style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            transform: hoverImage ? "scale(1.05)" : "scale(1)",
            borderRadius: 10,
            cursor: "pointer",
            minWidth: "300px",
          }}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        >
          <Image
            src="/pictures/Vortex.jpg"
            alt="Vortex Illustration"
            width={500}
            height={400}
            style={{
              borderRadius: 10,
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxWidth: "500px",
            }}
          />
        </div>
      </main>
    </div>
  );
}
