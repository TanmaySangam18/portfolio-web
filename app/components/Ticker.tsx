'use client';

const ITEMS = [
  'ISRO', 'RED BULL', 'ADOBE', 'NORTHEASTERN UNIVERSITY', 'MBTA',
  'STARTUP BOSTON', 'PMI', 'WRITER\'S POCKET', 'THE QUILL HOUSE',
  'GITAM UNIVERSITY', 'RINIMA INSIGHTS', 'PUDDING.COOL PITCH',
  'YALE · MINNESOTA · VIRGINIA · LUND', 'TEDX GITAM',
  'NORTHEASTERN GRADUATE STUDENT GOVERNMENT',
];

const REPEATED = [...ITEMS, ...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div
      style={{
        borderBottom: '1px solid #000',
        borderTop: '1px solid #000',
        background: '#000',
        overflow: 'hidden',
        padding: '10px 0',
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .ticker-inner {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
          gap: 0;
        }
        .ticker-inner:hover { animation-play-state: paused; }
      `}</style>

      <div className="ticker-inner">
        {REPEATED.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-anton), sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: '#fff',
              paddingRight: '2.5rem',
            }}
          >
            {item}
            <span style={{ color: '#444', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
