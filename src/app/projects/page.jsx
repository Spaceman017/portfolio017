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
  const [galleryVisible, setGalleryVisible] = useState(false); // toggle gallery

  const galleryImages = [
    { name: "Madina", src: "/pictures/Madina.png" },
    { name: "Spice", src: "/pictures/Spice.jpg" },
    { name: "Make", src: "/pictures/Make.png" },
    { name: "Ramcy", src: "/pictures/Ramcy.png" },
    { name: "Ghurab_Logo", src: "/pictures/Ghurab_Logo.jpg" },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prevImage = () =>
    setCurrentIndex((currentIndex + galleryImages.length - 1) % galleryImages.length);
  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % galleryImages.length);

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
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Info card */}
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
            width: '100%',
            maxWidth: '600px',
          }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          <h1 style={{ color: '#0047ab', marginBottom: '1rem' }}>Project</h1>
          <div style={{ lineHeight: 1.6 }}>
            <h3 style={{ color: 'black', marginBottom: '0.25rem' }}>A Cooking Recipe Website</h3>
            <p style={{ color: 'black', marginBottom: '1rem' }}>
              Frontend-only recipes website built with HTML, CSS, and JavaScript.
            </p>

            <h3 style={{ color: 'black', marginBottom: '0.25rem' }}>A Blogging Website</h3>
            <p style={{ color: 'black', marginBottom: '1rem' }}>
              Frontend blogging prototype built with HTML, CSS, and JavaScript.
            </p>

            <h3 style={{ color: 'black', marginBottom: '0.25rem' }}>An Automobile App (In Development)</h3>
            <p>Planned application focusing on car-related features.</p>

            <div style={{ marginTop: '1.5rem' }}>
              <ButtonLink href="/contact">Reach me</ButtonLink>
            </div>
          </div>
        </section>

        {/* Gallery toggle button */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            background: 'rgba(0, 71, 171, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => setGalleryVisible(!galleryVisible)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '2px solid #0047AB',
              background: '#0047AB',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {galleryVisible ? "Hide Previous Graphics Projects" : "Show Previous Graphics Projects"}
          </button>
        </div>

        {/* Gallery */}
        {galleryVisible && (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
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
                    ? 'none'
                    : 'none',
                  borderRadius: 10,
                  cursor: 'pointer',
                  flex: '1 1 200px',
                  maxWidth: '250px',
                }}
                onMouseEnter={() =>
                  setHoverGallery({ ...hoverGallery, [img.name]: true })
                }
                onMouseLeave={() =>
                  setHoverGallery({ ...hoverGallery, [img.name]: false })
                }
                onClick={() => openModal(index)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={250}
                  height={250}
                  style={{ borderRadius: 10, objectFit: 'cover', width: '100%' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].name}
                width={800}
                height={800}
                style={{ objectFit: 'contain', borderRadius: 10, width: '100%', height: 'auto' }}
              />

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-40px',
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
                  right: '-40px',
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

              {/* Close button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '-40px',
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
