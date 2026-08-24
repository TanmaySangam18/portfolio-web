'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#work' },
  { label: 'Design',     href: '#design' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        <span style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          TANMAY SANGAM
        </span>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#000', textDecoration: 'none',
                opacity: 0.55, transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
            >
              {label}
            </a>
          ))}

          {/* Resume download */}
          <a
            href="/resumes/pm.pdf"
            download="TanmaySangam_ProductManager.pdf"
            style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#000', border: '2px solid #000',
              padding: '6px 14px', textDecoration: 'none', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
          >
            Resume ↓
          </a>

          <a
            href="#contact"
            style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#fff', background: '#000',
              padding: '7px 16px', textDecoration: 'none', transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Get in touch →
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'flex-end',
          }}
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#000' }} />
          <span style={{ display: 'block', width: '18px', height: '2px', background: '#000' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#000' }} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem 1.75rem',
            overflowY: 'auto',
          }}
        >
          {/* Top row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: '1rem', letterSpacing: '0.05em', color: '#fff' }}>
              TANMAY SANGAM
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.6rem', cursor: 'pointer', padding: '4px', lineHeight: 1 }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #222' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-anton), sans-serif',
                  fontSize: 'clamp(2rem, 9vw, 2.8rem)',
                  color: '#fff',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid #222',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                {label.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Resume download */}
          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="/resumes/pm.pdf"
              download="TanmaySangam_ProductManager.pdf"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 16px',
                border: '1px solid #333',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <span>Resume</span>
              <span style={{ opacity: 0.45, fontSize: '1rem' }}>↓</span>
            </a>
          </div>

          {/* Email CTA */}
          <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 20px',
                background: '#fff',
                color: '#000',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Get in touch →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
