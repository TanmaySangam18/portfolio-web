import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agent Earth · Case Study · Tanmay Sangam',
  description: 'How I designed Agent Earth, a persistent AI civilization where agents representing real users inhabit a 3D Earth.',
};

const STATS = [
  { label: 'Scope', value: 'Systems', sub: 'architecture, flows, memory' },
  { label: 'Real-time', value: 'WebSocket', sub: 'agent conversations' },
  { label: 'World cycle', value: '12 min', sub: 'day/night loop' },
  { label: 'Status', value: 'Archived', sub: 'working prototype' },
];

const SECTIONS = [
  {
    phase: 'Problem',
    content: `AI agents in 2025 came in two shapes. Chatbots that were sharp in conversation but had no world, no continuity, and no life between your messages. And game NPCs that lived in a world but had no relationship to any real person. Neither could answer the question I was interested in: what would it look like for something to represent you while you were not there, and still be recognizably you when you came back?`,
  },
  {
    phase: 'Research',
    content: `This was a systems problem more than a user-testing problem, so the work went into reading how agent memory architectures actually degrade over long runs, and into watching how people read state in simulation games. The useful finding from the latter was that people infer emotion from motion and proximity long before they read any text label. That pushed the design away from dashboards.`,
  },
  {
    phase: 'Key Design Decisions',
    content: `A twelve minute day and night cycle. Short cycles made agents look frantic and meaningless, long ones made the world look frozen. Twelve minutes compressed a human rhythm into something you could sit and watch without it feeling either manic or dead.

Memory as summarized episodes, not transcripts. Storing everything is both expensive and wrong. An agent that remembers every word is not lifelike, it is a search index. Summarising into episodes gave agents something closer to the shape of actual recall, including its gaps.

Relationships surfaced spatially. Rather than a list of connections, closeness was expressed as proximity and visible ties on the globe, so you could understand an agent's social position in a glance.`,
  },
  {
    phase: 'Outcome',
    content: `The prototype reached real-time agent conversation over WebSockets with the day and night cycle running and memory summarization working end to end. It never went to production and I have archived it. What it produced that outlasted the code was the information architecture: a defensible answer for how agent memory, mood, and relationships should be modelled and surfaced.`,
  },
  {
    phase: 'Lessons',
    content: `Designing for agents taught me something that transferred straight back to designing for people: legibility beats completeness. A system that shows less but is instantly readable will always beat one that exposes everything.

If I ran it again I would build the smallest legible slice, one agent and one visible relationship, and put it in front of people before building a world. The ambition of the simulation outran the evidence for it, and that is a failure mode I now watch for in my own work.`,
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
