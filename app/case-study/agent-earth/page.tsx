import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agent Earth · Case Study — Tanmay Sangam',
  description: 'How I designed Agent Earth — a persistent AI civilization where agents representing real users inhabit a 3D Earth.',
};

const STATS = [
  { label: 'Design docs', value: '36', sub: 'architecture, flows, systems' },
  { label: 'Real-time', value: 'WebSocket', sub: 'agent conversations' },
  { label: 'World cycle', value: '12 min', sub: 'day/night loop' },
  { label: 'Status', value: 'MVP', sub: 'deploying to Vercel + Railway' },
];

const SECTIONS = [
  {
    phase: 'Problem',
    content: '[Paste your problem statement here. What gap in social interaction or AI experience were you solving? Who was the user? What made existing solutions — social networks, AI companions, multiplayer games — fall short?]',
  },
  {
    phase: 'Research',
    content: '[Paste your research here. What did you learn about how people want to interact with AI representations of themselves? What behavioral patterns informed the design of agent memory, mood, and relationship systems?]',
  },
  {
    phase: 'Key Design Decisions',
    content: '[Describe 2–3 critical design decisions. Example: "The hardest decision was the day/night cycle length. Too short and agents felt frantic — too long and the world felt static. 12 minutes mapped to a compressed human rhythm that felt alive without being overwhelming. I validated this by watching 3 live sessions and measuring when observers stopped watching."]',
  },
  {
    phase: 'Outcome',
    content: '[What happened? What did you learn from watching people interact with it? Include any metrics or qualitative feedback you have.]',
  },
  {
    phase: 'Lessons',
    content: '[2–3 takeaways. What does designing for AI agents teach you that designing for human users doesn\'t? What would you do differently?]',
  },
];

export default function AgentEarthCaseStudy() {
  return (
    <div style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', background: '#fff', color: '#000' }}>
      {/* Back nav */}
      <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          href="/#work"
          style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', textDecoration: 'none' }}
        >
          ← Back to work
        </Link>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
          Deploying soon
        </span>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 2rem 4rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>
          Case Study · AI Systems · Interaction Design · Systems Thinking
        </div>
        <div
          style={{
            fontFamily: 'var(--font-anton), sans-serif',
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            textTransform: 'uppercase',
            lineHeight: 0.92,
            marginBottom: '2rem',
          }}
        >
          AGENT<br />EARTH.
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 500, lineHeight: 1.65, maxWidth: '700px', color: '#333' }}>
          AI agents representing real users inhabit a 3D Earth. Each agent has personality, mood, memory, and relationships. They converse when nearby, form friendships, and continue living when you&apos;re offline. 36 design documents. One world.
        </p>
      </div>

      {/* Stat grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderBottom: '2px solid #000' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: '1.75rem 1.5rem', borderRight: i < STATS.length - 1 ? '2px solid #000' : 'none' }}>
            <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#888', marginBottom: '6px' }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', textTransform: 'uppercase', marginBottom: '3px' }}>{s.value}</div>
            <div style={{ fontSize: '0.65rem', color: '#666', lineHeight: 1.4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Case study sections */}
      <div style={{ padding: '5rem 2rem', borderBottom: '2px solid #000' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {SECTIONS.map((s, i) => (
            <div
              key={s.phase}
              style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem',
                padding: '3rem 0', borderBottom: i < SECTIONS.length - 1 ? '1px solid #e5e5e5' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.02em', paddingTop: '3px' }}>
                {s.phase}
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#555', margin: 0 }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ padding: '4rem 2rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>Technical Stack</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Next.js', 'Three.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Claude API', 'WebSocket', 'pgvector'].map((t) => (
            <span key={t} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 12px', border: '2px solid #000', lineHeight: 1 }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '5rem 2rem', background: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '0.75rem' }}>
            DEPLOYING SOON.
          </div>
          <p style={{ fontSize: '0.88rem', color: '#aaa', lineHeight: 1.6, maxWidth: '500px', margin: 0 }}>
            MVP complete. 36 design docs. WebSocket real-time. Monetization scaffolded.
          </p>
        </div>
        <Link
          href="/#work"
          style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', border: '2px solid #fff', padding: '12px 24px', textDecoration: 'none' }}
        >
          ← All work
        </Link>
      </div>
    </div>
  );
}
