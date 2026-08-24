import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ArrowMeet · Case Study — Tanmay Sangam',
  description: 'How I designed ArrowMeet — an iOS dating app built for real-world connections at events and campuses.',
};

const STATS = [
  { label: 'Platform', value: 'iOS', sub: 'SwiftUI · iPhone 17 Pro Simulator' },
  { label: 'Status', value: 'App Store', sub: 'ready for submission' },
  { label: 'Revenue model', value: 'Subscription', sub: 'RevenueCat paywall' },
  { label: 'Build scope', value: '55 files', sub: 'Swift · App Clip · Dynamic Island' },
];

const SECTIONS = [
  {
    phase: 'Problem',
    content: '[Paste your problem statement here. What user problem were you solving? Who was the target user? What existing solutions failed them and why?]',
  },
  {
    phase: 'Research',
    content: '[Paste your research findings here. What did users tell you? What behaviors did you observe? What assumptions did your research confirm or kill?]',
  },
  {
    phase: 'Key Design Decisions',
    content: '[Describe the 2–3 most important design decisions you made. For each: what were the options, what did you choose, and why? Example: "I chose App Clip over a full onboarding flow because first-time users at events needed sub-30-second access — a full download was a conversion killer."]',
  },
  {
    phase: 'Outcome',
    content: '[What happened? Metrics, feedback, or ready-state. Example: "App Store ready. RevenueCat paywall shipped. Dynamic Island integration complete. Ready for submission pending Apple Dev account."]',
  },
  {
    phase: 'Lessons',
    content: '[2–3 takeaways from this project. What would you do differently? What design principle did this project teach you?]',
  },
];

export default function ArrowMeetCaseStudy() {
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
        <a
          href="https://github.com/TanmaySangam18/Arrow-Meet"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: '#000', padding: '8px 18px', textDecoration: 'none' }}
        >
          GitHub →
        </a>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 2rem 4rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>
          Case Study · iOS · Product Design · UX Research
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
          ARROW<br />MEET.
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 500, lineHeight: 1.65, maxWidth: '700px', color: '#333' }}>
          An iOS dating app designed for real-world connections — at events, on campuses, in the moments when proximity is already doing the work. Full subscription paywall, App Clip, Dynamic Island, Live Activity.
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
          {['SwiftUI', 'Supabase', 'RevenueCat', 'Fastlane', 'App Clip', 'Dynamic Island', 'Live Activity', 'Realtime Chat'].map((t) => (
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
            SEE THE CODE.
          </div>
          <p style={{ fontSize: '0.88rem', color: '#aaa', lineHeight: 1.6, maxWidth: '500px', margin: 0 }}>
            Full SwiftUI codebase — 55 files, App Clip, Dynamic Island, RevenueCat paywall.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/TanmaySangam18/Arrow-Meet"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '12px 24px', textDecoration: 'none' }}
          >
            GitHub →
          </a>
          <Link
            href="/#work"
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', border: '2px solid #fff', padding: '12px 24px', textDecoration: 'none' }}
          >
            ← All work
          </Link>
        </div>
      </div>
    </div>
  );
}
