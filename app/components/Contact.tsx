'use client';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 2rem 8rem', borderBottom: '2px solid #000' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '5rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          CONTACT
        </div>
      </div>

      {/* Big CTA statement */}
      <div
        className="font-display"
        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '3rem', maxWidth: '900px', lineHeight: 1 }}
      >
        OPEN TO THE RIGHT OPPORTUNITY.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '760px', marginBottom: '4rem' }}>
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Looking for
          </div>
          {[
            'Product Manager',
            'Associate Product Manager',
            'Founding PM',
            'Product Operations',
            'GTM / Revenue Operations',
          ].map((role) => (
            <div
              key={role}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                padding: '7px 0',
                borderBottom: '1px solid #e5e5e5',
                lineHeight: 1,
              }}
            >
              {role}
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Where
          </div>
          {[
            'NYC (preferred)',
            'Fully remote US',
            'Boston, MA',
            'Singapore',
            'Open to anywhere',
          ].map((loc) => (
            <div
              key={loc}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                padding: '7px 0',
                borderBottom: '1px solid #e5e5e5',
                lineHeight: 1,
              }}
            >
              {loc}
            </div>
          ))}
          <div style={{ marginTop: '1.25rem', padding: '10px 14px', border: '2px solid #000', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.6 }}>
            OPT · No sponsorship needed<br />
            No H-1B lottery · Available now
          </div>
        </div>
      </div>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a
          href="mailto:tanmaysangam018@gmail.com"
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#fff',
            background: '#000',
            padding: '14px 28px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          tanmaysangam018@gmail.com →
        </a>
        <a
          href="https://linkedin.com/in/tanmaysangam"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#000',
            border: '2px solid #000',
            padding: '14px 28px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#000';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#000';
          }}
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/TanmaySangam18"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#000',
            border: '2px solid #000',
            padding: '14px 28px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#000';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#000';
          }}
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
