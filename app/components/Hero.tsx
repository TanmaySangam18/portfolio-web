'use client';

import { useEffect, useState } from 'react';

const slides = [
  ['I BUILD', 'THE THING', "THAT DOESN'T", 'EXIST YET.'],
  ['I DESIGN IT.', 'I BUILD IT.', 'I SHIP IT.', 'I RUN IT.'],
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '72px 2rem 4rem',
        borderBottom: '2px solid #000',
      }}
    >
      {/* Status bar */}
      <div
        className="fade-up delay-100"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#444',
          paddingTop: '1.5rem',
        }}
      >
        <span
          className="blink"
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        Available Now · OPT · No sponsorship · No lottery · Boston, MA
      </div>

      {/* Flex spacer */}
      <div style={{ flexGrow: 1 }} />

      {/* Slideshow headline */}
      <div
        style={{
          marginBottom: '3rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {slides[active].map((line, i) => (
          <div
            key={`${active}-${i}`}
            className="font-display"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)', display: 'block' }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Slide dots */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '2rem',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setActive(i); setVisible(true); }, 500); }}
            style={{
              width: '28px',
              height: '3px',
              background: active === i ? '#000' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>

      {/* Bottom info row */}
      <div
        className="fade-up delay-500 hero-bottom-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          borderTop: '1px solid #000',
          paddingTop: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '6px' }}>
            Identity
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.55 }}>
            Product Design · Engineering · Product Management<br />
            MS Project Management @ Northeastern
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '6px' }}>
            Numbers
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.8 }}>
            3 case studies &nbsp;·&nbsp; 2 live products<br />
            MBTA directors pitched &nbsp;·&nbsp; 588 commits shipped solo
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '0' }}>
            Find me
          </div>
          <a
            href="https://linkedin.com/in/tanmaysangam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#fff', background: '#000',
              padding: '8px 18px', textDecoration: 'none',
            }}
          >
            LinkedIn →
          </a>
          <a
            href="mailto:tanmaysangam018@gmail.com"
            style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#000', border: '2px solid #000',
              padding: '8px 18px', textDecoration: 'none',
            }}
          >
            Email me →
          </a>
        </div>
      </div>
    </section>
  );
}
