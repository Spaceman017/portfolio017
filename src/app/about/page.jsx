"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ButtonLink from "../components/ButtonLink";
import Image from "next/image";

export default function Home() {
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
      <Navbar />
      <main
        style={{
          maxWidth: '1200px',
          margin: '2rem auto',
          padding: '1rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap', // stack on smaller screens
          justifyContent: 'center',
        }}
      >
        {/* Left info card */}
        <section
          style={{
            padding: '1.5rem',
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: 8,
            border: hoverCard ? '2px solid #0047AB' : '2px solid black',
            boxShadow: hoverCard
              ? '0 15px 25px rgba(0,71,171)'
              : '0 10px 20px rgba(0, 71, 171)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            transform: hoverCard ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer',
            width: '400px',
            maxWidth: '100%',
            color: '#f0f0f0',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#0047ab', marginBottom: '0.5rem' }}>About</h1>
          <p style={{ color: "black", lineHeight: 1.6 }}>
            I am <strong>Sulaiman Muhammad</strong>, a student at Kaduna State University,
            currently training at <strong>Cloudsoft Consulting.</strong>
          </p>
          <p style={{ color: "black", marginTop: '1rem' }}>
            I am actively learning modern tools like React and Next.js and aim to deliver practical,
            user-friendly apps as I grow.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <ButtonLink href="/projects">My Projects</ButtonLink>
          </div>
        </section>

        {/* Right image */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transform: hoverImage ? 'scale(1.05)' : 'scale(1)',
            boxShadow: hoverImage ? "none" : 'none',
            borderRadius: 10,
            cursor: 'pointer',
            flex: '1 1 350px', // responsive
            minWidth: '300px',
          }}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        >
          <Image
            src="/pictures/Sulaiman_img.jpg"
            alt="Sulaiman Muhammad"
            width={350}
            height={400}
            style={{ borderRadius: 10, objectFit: 'cover' }}
          />
        </div>
      </main>
    </div>
  );
}
