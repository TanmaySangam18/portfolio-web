import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tanmay Sangam — I build the thing that doesn\'t exist yet.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          border: '12px solid #000',
          boxSizing: 'border-box',
        }}
      >
        {/* Top: name + status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 4, textTransform: 'uppercase' }}>
            TANMAY SANGAM
          </span>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase',
            color: '#22c55e', border: '2px solid #22c55e', padding: '4px 12px',
          }}>
            ● Available July 2026
          </span>
        </div>

        {/* Massive headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {['I BUILD THE', 'THING THAT', "DOESN'T", 'EXIST YET.'].map((line, i) => (
            <span
              key={i}
              style={{
                fontSize: 110,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -2,
                textTransform: 'uppercase',
                color: '#000',
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Bottom stats row */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', borderTop: '3px solid #000', paddingTop: 24 }}>
          {[
            ['9', 'products shipped'],
            ['3,000+', 'event attendees'],
            ['200', 'community members'],
            ['275', 'newsletter subs'],
            ['ISRO', 'ex-aerospace'],
          ].map(([num, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: -1 }}>{num}</span>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#666' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
