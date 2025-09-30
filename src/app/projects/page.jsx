"use client";
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';

export default function ProjectsPage() {
  const [hoverCard, setHoverCard] = useState(false);
  const [hoverGallery, setHoverGallery] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { name: "Madina", src: "/assets/Madina.png" },
    { name: "Spice", src: "/assets/Spice.jpg" },
    { name: "Make", src: "/assets/Make.png" },
    { name: "Ramcy", src: "/assets/Ramcy.png" },
    { name: "Ghurab_Logo", src: "/assets/Ghurab_Logo.jpg" },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((currentIndex + galleryImages.length - 1) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <div  style={{
        minHeight: "100vh",
        backgroundImage: "url('/pictures/fold-img.png')",
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
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Centered info card */}
        <section
          style={{
            padding: '2rem',
            background: "rgba(10,10,10,0.85)",
            borderRadius: 8,
            border: hoverCard ? '2px solid #00bfff' : '2px solid gray',
            boxShadow: hoverCard
              ? '0 15px 25px rgba(0,191,255,0.5)'
              : '0 10px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            transform: hoverCard ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer',
            color: '#f0f0f0',
            width: '100%',
            maxWidth: '600px',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#1e90ff', marginBottom: '1rem' }}>Project</h1>
  <div style={{ lineHeight: 1.6 }}>
    <h3 style={{ marginBottom: '0.25rem' }}>A Cooking Recipe Website</h3>
    <p style={{ marginBottom: '1rem' }}>A frontend-only recipes website built with HTML, CSS, and JavaScript.</p>

    <h3 style={{ marginBottom: '0.25rem' }}>A Blogging Website for Aspiring Journalists</h3>
    <p style={{ marginBottom: '1rem' }}>A frontend blogging prototype built with HTML, CSS, and JavaScript.</p>

    <h3 style={{ marginBottom: '0.25rem' }}>An Automobile Building App (In Development)</h3>
    <p>Planned application focusing on car-related features and tools.</p>
    <div style={{ marginTop: '1.5rem' }}>
            <ButtonLink href="/contact">Reach me</ButtonLink>
          </div>
  
  </div>
</section>
        {/* Gallery title */}
        <h2 style={{ color: '#000000ff', marginBottom: '1rem', textAlign: 'center' }}>
          Some previous graphic design projects
        </h2>

        {/* Gallery images */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={img.name}
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoverGallery[img.name] ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoverGallery[img.name]
                  ? '0 15px 25px rgba(0,191,255,0.4)'
                  : 'none',
                borderRadius: 10,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoverGallery({ ...hoverGallery, [img.name]: true })}
              onMouseLeave={() => setHoverGallery({ ...hoverGallery, [img.name]: false })}
              onClick={() => openModal(index)}
            >
              <Image
                src={img.src}
                alt={img.name}
                width={250}
                height={250}
                style={{ borderRadius: 10, objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {/* Custom modal/lightbox */}
        {modalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
            onClick={closeModal}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%',
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].name}
                width={800}
                height={800}
                style={{ objectFit: 'contain', borderRadius: 10 }}
              />
              {/* Navigation */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-50px',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '2rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-50px',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '2rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ›
              </button>
              {/* Close */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '2rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
