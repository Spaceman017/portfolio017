"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
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
        overflowX: "hidden",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {/* Centered Contact Card */}
        <section
          style={{
            padding: '2rem',
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: 8,
            border: hoverCard ? '2px solid #0047ab' : '2px solid black',
            boxShadow: hoverCard
              ? '0 15px 25px rgba(0, 71, 171)'
              : '0 10px 20px rgba(0, 71, 171)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            transform: hoverCard ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer',
            color: '#f0f0f0',
            width: '350px',
            height: '150px',
            textAlign: 'center',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#0047ab', marginBottom: '1rem' }}>Contact</h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:msulaiman1030@gmail.com">
              <img
                src="/pictures/Email_icon.png"
                alt="Email"
                style={{ width: '40px', height: '40px', transition: '0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </a>

            <a href="tel:09039628273">
              <img
                src="/pictures/Phone_icon.png"
                alt="Phone"
                style={{ width: '40px', height: '40px', transition: '0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </a>

            <a href="https://wa.me/2348118639075" target="_blank" rel="noopener noreferrer">
              <img
                src="/pictures/WhatsApp-Logo-PNG-Background-Clip-Art.png"
                alt="WhatsApp"
                style={{ width: '40px', height: '40px', transition: '0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
