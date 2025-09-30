"use client";
import Navbar from '../components/Navbar';
import ButtonLink from '../components/ButtonLink';
import { useState } from 'react';
import Image from 'next/image';

export default function SkillsPage() {
  const [hoverCard, setHoverCard] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);

  return (
    <div  style={{
        minHeight: "100vh",
        backgroundImage: "url('/assets/fold-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}>
      <Navbar />
      <main
        style={{
          maxWidth: '1200px',
          margin: '2rem auto',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '2rem', // space between card and image
        }}
      >
        {/* Left skills card */}
        <section
          style={{
            padding: '1.5rem',
            background: "rgba(10,10,10,0.85)",
            borderRadius: 8,
            border: hoverCard ? '2px solid #00bfff' : '2px solid gray',
            boxShadow: hoverCard
              ? '0 15px 25px rgba(0,191,255,0.5)' // light blue glow
              : '0 10px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            transform: hoverCard ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer',
            width: '400px',
            color: '#f0f0f0',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#1e90ff', marginBottom: '1rem' }}>Skills</h1>
          <ul style={{ lineHeight: 1.6, paddingLeft: '1rem' }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Graphical Design</li>
          </ul>
          <div style={{ marginTop: '1.25rem' }}>
            <ButtonLink href="/projects">See Projects</ButtonLink>
          </div>
        </section>

        {/* Right-side image */}
        <div
          style={{
            marginLeft: 'auto', // pushes image to the right
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transform: hoverImage ? 'scale(1.05)' : 'scale(1)',
            borderRadius: 10,
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        >
          <Image
            src="/pictures/Vortex.jpg"
            alt="Vortex Illustration"
            width={500}
            height={400}
            style={{ borderRadius: 10, objectFit: 'cover' }}
          />
        </div>
      </main>
    </div>
  );
}
