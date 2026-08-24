import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BostonOnline · Case Study · Tanmay Sangam',
  description: 'How I built and pitched a behavioral science-backed fare compliance platform to MBTA directors.',
};

const STATS = [
  { label: 'Problem size', value: '$25M+', sub: 'annual MBTA fare evasion' },
  { label: 'Pilot proposed', value: '90 days', sub: 'Green Line · zero cost to MBTA' },
  { label: 'Projected Year 1', value: '$500K–$2M', sub: 'revenue recovery' },
  { label: 'Build time', value: '0 engineers', sub: 'AI-directed full-stack' },
  { label: 'Stack', value: '10 APIs', sub: '8 DB tables · fraud detection' },
  { label: 'Presented to', value: 'MBTA Directors', sub: 'enterprise proposal + one-pager' },
];

const TIMELINE = [
  { phase: 'Discovery', detail: 'Researched MBTA fare evasion data, rider behavior patterns, and existing compliance enforcement approaches. Identified the core failure: enforcement is punitive, not motivating.' },
  { phase: 'Behavioral Thesis', detail: 'Applied behavioral science frameworks: loss aversion, social proof, reward scheduling, to design a system that makes compliance feel rewarding rather than obligatory. Modeled after loyalty programs, not fines.' },
  { phase: 'Product Architecture', detail: 'Designed a three-sided marketplace: riders earn FarePoints for tapping in, redeem at local businesses, and MBTA gets real-time compliance data with GPS-verified check-ins and haversine geofencing.' },
  { phase: 'Build', detail: 'Directed the full-stack build using Claude Code: Next.js 16, Expo SDK 54, Drizzle ORM, Neon PostgreSQL, Clerk Auth, Turborepo monorepo. 10 API routes, 8 database tables, fraud detection system. Zero external engineers.' },
  { phase: 'Pitch Preparation', detail: 'Wrote the enterprise proposal, built the one-pager, and prepared a live demo. Framed the pilot as a zero-cost 90-day test on the Green Line, eliminating budget risk as an objection.' },
  { phase: 'MBTA Presentation', detail: 'Formally presented to MBTA department directors. The proposal was received and reviewed at the leadership level. Enterprise proposal and live demo both delivered.' },
];

export default function BostonlineCaseStudy() {
  return (
    <div style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', background: '#fff', color: '#000' }}>
      {/* Back nav */}
      <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          href="/#work"
          style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          ← Back to work
        </Link>
        <span
          style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}
        >
          Demo access on request
        </span>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 2rem 4rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>
          Case Study · Civic Tech · Behavioral Science
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
          BOSTON<br />ONLINE.
        </div>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 500, lineHeight: 1.65, maxWidth: '700px', color: '#333' }}>
          A three-sided fare compliance platform that turns MBTA riders into participants, not violators. Built with no engineering team. Formally presented to MBTA department directors.
        </p>
      </div>

      {/* Stat grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0', borderBottom: '2px solid #000' }}>
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: '1.75rem 1.5rem',
              borderRight: i < STATS.length - 1 ? '2px solid #000' : 'none',
            }}
          >
            <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#888', marginBottom: '6px' }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', textTransform: 'uppercase', letterSpacing: '0.01em', marginBottom: '3px' }}>{s.value}</div>
            <div style={{ fontSize: '0.65rem', color: '#666', lineHeight: 1.4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Problem */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderBottom: '2px solid #000' }}>
        <div style={{ padding: '4rem 2rem', borderRight: '2px solid #000' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>The Problem</div>
          <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            $25M WALKS OUT THE DOOR EVERY YEAR.
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#333' }}>
            MBTA loses over $25 million annually to fare evasion. The current enforcement strategy of fines, gate jumping prevention, fare inspectors, is punitive and expensive. It treats riders as suspects rather than participants. The evasion rate hasn&apos;t meaningfully declined.
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#333', marginTop: '1rem' }}>
            The real problem isn&apos;t that riders are dishonest. It&apos;s that the system gives them no reason to comply beyond fear of getting caught, and the catch rate is low enough that the gamble feels worth it.
          </p>
        </div>
        <div style={{ padding: '4rem 2rem' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>The Insight</div>
          <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            MAKE COMPLIANCE THE REWARD.
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#333' }}>
            Behavioral science is clear: punishment suppresses behavior in the short term but doesn&apos;t build habits. Reward scheduling, specifically variable ratio reinforcement, builds durable behavior patterns. Starbucks, Duolingo, and every successful loyalty program is built on this.
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#333', marginTop: '1rem' }}>
            BostonOnline flips the model: riders earn FarePoints for tapping in. FarePoints redeem at local Boston businesses. MBTA gets compliance data. Businesses get foot traffic. The rider gets rewarded for doing the right thing.
          </p>
        </div>
      </div>

      {/* Build timeline */}
      <div style={{ padding: '5rem 2rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '3rem' }}>Build Timeline</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {TIMELINE.map((t, i) => (
            <div
              key={t.phase}
              style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: '2rem',
                padding: '2rem 0', borderBottom: i < TIMELINE.length - 1 ? '1px solid #e5e5e5' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.02em', paddingTop: '3px' }}>
                {t.phase}
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#333', margin: 0 }}>{t.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ padding: '4rem 2rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>Technical Stack</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Next.js 16', 'Expo SDK 54', 'React Native', 'Drizzle ORM', 'Neon PostgreSQL', 'Clerk Auth', 'Turborepo', 'Haversine Geofencing', 'GPS Verification', 'Fraud Detection', 'FarePoints Engine', 'Vercel'].map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '6px 12px', border: '2px solid #000', lineHeight: 1,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '5rem 2rem', background: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '0.75rem' }}>
            SEE IT LIVE.
          </div>
          <p style={{ fontSize: '0.88rem', color: '#aaa', lineHeight: 1.6, maxWidth: '500px', margin: 0 }}>
            Three complete user flows built and running: rider, local business, and MBTA admin dashboard. The deployment is access-controlled, but I am happy to walk through it live.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:tanmaysangam018@gmail.com?subject=BostonOnline%20demo%20walkthrough"
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '12px 24px', textDecoration: 'none' }}
          >
            Request a walkthrough →
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
