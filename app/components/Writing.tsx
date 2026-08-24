'use client';

export default function Writing() {
  return (
    <section id="writing" style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          WRITING
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          Newsletter · Published books · Data journalism
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '0', border: '2px solid #000' }}>
        {/* Newsletter */}
        <div style={{ padding: '2.5rem', borderRight: '2px solid #000' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} className="blink" />
            Active · 275+ subscribers
          </div>
          <div className="font-display" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>THE POLYGON</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            LinkedIn Newsletter · 4× monthly · 12+ months · 0 missed editions
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#444' }}>
            Exploring the intersection of technology, design, and human behavior. Written for builders, operators, and people who like thinking about why things work the way they do.
          </p>
          <a
            href="https://linkedin.com/in/tanmaysangam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000',
              borderBottom: '1.5px solid #000', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Read on LinkedIn →
          </a>
        </div>

        {/* Book 1 */}
        <div style={{ padding: '2.5rem', borderRight: '2px solid #000' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Published Book · 2023
          </div>
          <div className="font-display" style={{ fontSize: '1.5rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            A GIRL WITH A NOSE RING AND POETRY
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Poetry Collection · Writer&apos;s Pocket · Amazon.in
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#444' }}>
            A poetry collection about second chances, self-discovery, and the space between dreaming and doing. Self-published and live on Amazon.in.
          </p>
          <a
            href="https://www.amazon.in/s?k=A+Girl+With+A+Nose+Ring+And+Poetry+Tanmay+Sangam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000',
              borderBottom: '1.5px solid #000', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Find on Amazon →
          </a>
        </div>

        {/* Book 2 */}
        <div style={{ padding: '2.5rem' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Published Anthology · 2021
          </div>
          <div className="font-display" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>EUPHORIA</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            Creative Writing Anthology · The Quill House · Amazon
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#444' }}>
            Co-authored creative writing anthology published with The Quill House. Available on Amazon globally.
          </p>
          <a
            href="https://www.amazon.com/s?k=Euphoria+The+Quill+House+anthology"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000',
              borderBottom: '1.5px solid #000', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Find on Amazon →
          </a>
        </div>
      </div>

      {/* Data journalism callout */}
      <div
        style={{
          marginTop: '2rem',
          padding: '2rem',
          border: '2px solid #000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '6px' }}>
            Data Journalism · Pudding.cool Pitch
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            The Founder Profile — Do LinkedIn career paths predict who starts a company?
          </div>
          <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '6px', lineHeight: 1.5 }}>
            Python pipeline analyzing 200+ founder profiles from LinkedIn, Crunchbase, AngelList, and ProductHunt. Pitched as a visual data essay to Pudding.cool.
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <span
            style={{
              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '4px 10px', border: '1.5px solid #6366f1', color: '#6366f1',
            }}
          >
            In Progress
          </span>
        </div>
      </div>
    </section>
  );
}
