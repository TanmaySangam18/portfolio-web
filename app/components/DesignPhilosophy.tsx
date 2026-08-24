'use client';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Find the moment someone gives up',
    body: 'I don’t start with wireframes. I start by locating the exact moment a person quits — the tap that goes nowhere, the fare gate they route around, the message they never send. On BostonOnline the real broken moment wasn’t the gate jump; it was a rider deciding the system was against them. Design the fix for that moment and the screens follow.',
  },
  {
    num: '02',
    title: 'Design the incentive, not the enforcement',
    body: 'Most products solve behaviour problems by adding friction or punishment. That reliably produces avoidance. The MBTA had a $25M fare-evasion problem framed as enforcement; I reframed riders as participants and built FarePoints — GPS-verified check-ins that made compliance the rewarding path. Same behaviour, inverted incentive.',
  },
  {
    num: '03',
    title: 'Restraint is a feature',
    body: 'What a product refuses to show is a design decision with more weight than most layouts. On Blip, identities are revealed only when notice is mutual — the entire product is built around what stays hidden. Deciding what not to build, not to surface, and not to notify is where trust is actually earned.',
  },
  {
    num: '04',
    title: 'Ship it, then watch where people hesitate',
    body: 'Polished mocks answer fewer questions than a rough build in someone’s hands. I validate structure first and earn the right to refine. The signal I care about isn’t what users say in a test — it’s where they pause, backtrack, or quietly stop returning.',
  },
];

export default function DesignPhilosophy() {
  return (
    <section id="design" style={{ padding: '6rem 2rem', borderBottom: '2px solid #000', background: '#fafafa' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          HOW I DESIGN
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          Process · Behavioural design · Product decisions
        </div>
      </div>

      {/* Opening statement */}
      <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 500, lineHeight: 1.65, color: '#111' }}>
          I design from behaviour, not assumption. My work runs from a specific, observed
          human failure to a shipped product — and because I build what I design, the
          hand-off never loses the argument. Good design is invisible. Bad design is the
          reason people quietly stop showing up.
        </p>
      </div>

      {/* Principles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap: '0', border: '2px solid #000' }}>
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.num}
            style={{
              padding: '2.5rem',
              borderRight: (i + 1) % 2 === 0 ? 'none' : '2px solid #000',
              borderBottom: i < PRINCIPLES.length - 2 ? '2px solid #000' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#999' }}>
              {p.num}
            </span>
            <div className="font-display" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.1 }}>
              {p.title.toUpperCase()}
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Where the design decisions are written down */}
      <div style={{ marginTop: '3rem', padding: '2rem', border: '2px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ maxWidth: '540px' }}>
          <div className="font-display" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', marginBottom: '0.5rem' }}>
            SEE THE DECISIONS.
          </div>
          <div style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.55 }}>
            Each case study documents the problem framing, the trade-offs I rejected,
            and why the shipped version looks the way it does.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href="/case-study/bostonline"
            style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#fff', background: '#000',
              padding: '12px 22px', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            BostonOnline →
          </a>
          <a
            href="/case-study/arrowmeet"
            style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#000', border: '2px solid #000',
              padding: '10px 20px', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            ArrowMeet →
          </a>
          <a
            href="/case-study/agent-earth"
            style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#000', border: '2px solid #000',
              padding: '10px 20px', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Agent Earth →
          </a>
        </div>
      </div>
    </section>
  );
}
