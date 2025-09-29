"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [hoverCard, setHoverCard] = useState(false);

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
          maxWidth: '1000px',
          margin: '2rem auto',
          padding: '1rem',
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: Contact Info Card */}
        <section
          style={{
            padding: '2rem',
            background: '#060606',
            borderRadius: 8,
            border: hoverCard ? '2px solid #00bfff' : '2px solid gray',
            boxShadow: hoverCard
              ? '0 15px 25px rgba(0,191,255,0.5)'
              : '0 10px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            transform: hoverCard ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer',
            color: '#f0f0f0',
            width: '350px',
            textAlign: 'center',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#1e90ff', marginBottom: '1rem' }}>Contact</h1>

          {/* Icons Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {/* Email */}
            <a href="mailto:msulaiman1030@gmail.com">
              <img
                src="/assets/Email_icon.png"
                alt="Email"
                style={{ width: '40px', height: '40px' }}
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

            {/* Phone */}
            <a href="tel:09039628273">
              <img
                src="/assets/Phone_icon.png"
                alt="Phone"
                style={{ width: '40px', height: '40px' }}
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

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348118639075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/WhatsApp-Logo-PNG-Background-Clip-Art.png"
                alt="WhatsApp"
                style={{ width: '40px', height: '40px' }}
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

        {/* Right: Message form */}
        <section
          style={{
            padding: '2rem',
            background: '#060606',
            borderRadius: 8,
            flex: 1,
          }}
        >
          <h1 style={{ color: '#1e90ff', marginBottom: '1rem' }}>Send a Message</h1>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{ padding: '0.75rem', borderRadius: 5, border: '1px solid gray' }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{ padding: '0.75rem', borderRadius: 5, border: '1px solid gray' }}
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              style={{ padding: '0.75rem', borderRadius: 5, border: '1px solid gray' }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem',
                backgroundColor: '#1e90ff',
                color: 'white',
                border: 'none',
                borderRadius: 5,
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
