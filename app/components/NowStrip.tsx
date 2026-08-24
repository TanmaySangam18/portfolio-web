'use client';

const NOW_ITEMS = [
  { label: 'Building', value: 'competitor.inc, an AI org that ships and runs real software' },
  { label: 'Designing', value: 'A consent-first way for strangers on the T to actually connect' },
  { label: 'Writing', value: 'The Polygon, 4× monthly on tech, design and behavior' },
  { label: 'Open to', value: 'Product design, engineering and PM roles. Available now.' },
  { label: 'Based in', value: 'Boston, MA' },
];

export default function NowStrip() {
  return (
    <div
      style={{
        background: '#f5f5f5',
        borderBottom: '2px solid #000',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'stretch',
          minHeight: '52px',
        }}
      >
        {/* Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '1.5rem',
            borderRight: '2px solid #000',
            gap: '8px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
              flexShrink: 0,
            }}
            className="blink"
          />
          <span
            style={{
              fontFamily: 'var(--font-anton), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#000',
              whiteSpace: 'nowrap',
            }}
          >
            NOW
          </span>
        </div>

        {/* Scrolling items */}
        <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', paddingLeft: '1.5rem' }}>
          <style>{`
            @keyframes nowscroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .now-inner {
              display: flex;
              width: max-content;
              animation: nowscroll 22s linear infinite;
              gap: 0;
            }
            .now-inner:hover { animation-play-state: paused; }
          `}</style>
          <div className="now-inner">
            {[...NOW_ITEMS, ...NOW_ITEMS].map((item, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingRight: '3rem',
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#666',
                  }}
                >
                  {item.label}
                </span>
                <span style={{ fontWeight: 500, color: '#111' }}>{item.value}</span>
                <span style={{ color: '#ccc', paddingLeft: '2rem' }}>|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
