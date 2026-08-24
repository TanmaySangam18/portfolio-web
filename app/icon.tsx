import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32, height: 32, background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#fff', fontSize: 18, fontWeight: 900, letterSpacing: -1 }}>T</span>
      </div>
    ),
    { ...size }
  );
}
