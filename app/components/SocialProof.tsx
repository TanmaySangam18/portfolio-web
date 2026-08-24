'use client';

const QUOTES = [
  {
    quote: 'Tanmay doesn\'t wait to be told what to do. He finds the gap, proposes a solution, and has a draft ready before the meeting ends. That\'s rare at any level.',
    name: 'Add name here',
    title: 'CEO · Rinima Insights',
    placeholder: true,
  },
  {
    quote: 'What impressed me most was how he coordinated across teams that had never worked together — vendors, student orgs, university admin — and made it look effortless. The events ran flawlessly.',
    name: 'Add name here',
    title: 'Faculty Advisor · GUSAC, GITAM University',
    placeholder: true,
  },
  {
    quote: 'He built a platform, wrote the pitch, and presented it to transit authority leadership — all while finishing a semester. That kind of initiative is what you want on an early team.',
    name: 'Add name here',
    title: 'Professor · Northeastern University',
    placeholder: true,
  },
];

const PRESS = [
  {
    outlet: 'Startup Boston',
    headline: 'Ideas Between Classes: How Boston\'s Students Turn Campus Creativity into Startups',
    url: 'https://www.startupbos.org/post/ideas-between-classes-how-boston-students-turn-campus-creativity-into-startups',
    year: '2025',
  },
  {
    outlet: 'ZoomInfo',
    headline: 'Tanmay Sangam — Content Writer, Startup Boston',
    url: 'https://www.zoominfo.com/p/Tanmay-Sangam/8113807244',
    year: '2025',
  },
];

export default function SocialProof() {
  return (
    <section style={{ padding: '6rem 2rem', borderBottom: '2px solid #000', background: '#fafafa' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          WORD ON ME
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          What people say · Press mentions
        </div>
      </div>

      {/* Quote grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '2px solid #000', marginBottom: '3rem' }}>
        {QUOTES.map((q, i) => (
          <div
            key={i}
            style={{
              padding: '2rem',
              borderRight: i < 2 ? '2px solid #000' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              position: 'relative',
            }}
          >
            {q.placeholder && (
              <div style={{
                position: 'absolute', top: '8px', right: '8px',
                fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#f59e0b',
                border: '1px solid #f59e0b', padding: '2px 5px',
              }}>
                Add quote
              </div>
            )}
            <div
              style={{
                fontFamily: 'var(--font-anton), sans-serif',
                fontSize: '3rem',
                lineHeight: 1,
                color: '#e5e5e5',
              }}
            >
              "
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#222', flexGrow: 1, fontStyle: 'italic' }}>
              {q.quote}
            </p>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#000' }}>{q.name}</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginTop: '2px' }}>{q.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Press row */}
      <div>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>
          As featured in / written for
        </div>
        <div style={{ display: 'flex', gap: '0', border: '2px solid #000' }}>
          {PRESS.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '1.25rem 1.5rem',
                borderRight: i < PRESS.length - 1 ? '2px solid #000' : 'none',
                textDecoration: 'none',
                color: '#000',
                display: 'block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '4px' }}>
                {p.outlet} · {p.year}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.4 }}>{p.headline} →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
