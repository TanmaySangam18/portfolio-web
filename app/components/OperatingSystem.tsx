'use client';

const PRINCIPLES = [
  {
    num: '01',
    title: 'MAP HUMANS FIRST.',
    body: 'Before touching execution, I identify every stakeholder, their incentive, and where their incentive conflicts with the goal. Projects fail at handoffs and blind spots — not in the work itself. Knowing who needs what before you start is half the project management.',
  },
  {
    num: '02',
    title: 'WRITE BEFORE YOU BUILD.',
    body: 'Every product I\'ve shipped started as a written document. Writing forces you to find the holes before they cost anything. If I can\'t explain the problem in one paragraph, I don\'t understand it well enough to build a solution.',
  },
  {
    num: '03',
    title: 'SHIP FAST. LEARN FASTER.',
    body: 'A live MVP with three real users beats a polished deck every time. I\'ve shipped 9 products by prioritizing deployed-and-imperfect over perfect-and-theoretical. Real feedback changes everything you thought you knew about your own idea.',
  },
  {
    num: '04',
    title: 'OWN THE WHOLE THING.',
    body: 'I don\'t do handoffs. If I\'m responsible for a deliverable, I\'m responsible for every dependency upstream and downstream. This is why events run on time, products get deployed, and reports come back without revision requests.',
  },
  {
    num: '05',
    title: 'SYSTEMS OVER HEROICS.',
    body: 'If something works because I\'m in the room, it\'s not a system — it\'s luck. Everything I build is designed to outlast my direct involvement: onboarding docs, process templates, feedback loops, and redundancy. I build so the next person can run it.',
  },
  {
    num: '06',
    title: 'BEHAVIOR IS THE PRODUCT.',
    body: 'Products, events, and teams all run on human behavior — not on good intentions. I design for how people actually act. Gamified fare compliance. Onboarding that cuts ramp time. Community programming with 80%+ retention. The design is the behavior change.',
  },
];

export default function OperatingSystem() {
  return (
    <section style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          HOW I WORK
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          Operating system · Six principles
        </div>
      </div>

      {/* Principles grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '2px solid #000' }}>
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.num}
            style={{
              padding: '2rem',
              borderRight: (i + 1) % 3 !== 0 ? '2px solid #000' : 'none',
              borderBottom: i < 3 ? '2px solid #000' : 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f9f9f9')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: '#bbb', marginBottom: '1rem' }}>
              {p.num}
            </div>
            <div
              className="font-display"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', marginBottom: '1rem', lineHeight: 1.1 }}
            >
              {p.title}
            </div>
            <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#444', margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
