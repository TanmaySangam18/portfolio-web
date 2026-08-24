import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ArrowMeet · Case Study · Tanmay Sangam',
  description: 'How I designed ArrowMeet, an iOS social discovery app built for real-world connection at events and campuses.',
};

const STATS = [
  { label: 'Platform', value: 'iOS', sub: 'SwiftUI · iPhone 17 Pro Simulator' },
  { label: 'Status', value: 'Archived', sub: 'working simulator build' },
  { label: 'Revenue model', value: 'Subscription', sub: 'RevenueCat paywall' },
  { label: 'Build scope', value: 'App Clip', sub: 'Swift · Live Activity · paywall' },
];

const SECTIONS = [
  {
    phase: 'Problem',
    content: `At an event or on a campus you are surrounded by people you would genuinely want to meet, and almost nobody speaks. The blocker is not access, it is the social cost of being the one who approaches. Dating apps had optimized for the opposite situation: swiping through strangers who are nowhere near you, later. Nothing was built for the room you are standing in right now.`,
  },
  {
    phase: 'Research',
    content: `I want to be straight about this: I did not run formal user studies. What I had was repeated observation from running events for three thousand people. The pattern that mattered most was how fast people abandon anything that asks them to install an app while they are standing in a crowd. That single behavior shaped the whole entry flow.`,
  },
  {
    phase: 'Key Design Decisions',
    content: `App Clip instead of a full download. A first-time user at an event needs to be inside the experience in under thirty seconds, and a trip to the App Store is where that intent dies. The Clip carried the cost of a smaller feature set in exchange for actually converting.

Presence as a Live Activity, not an open app. Requiring someone to hold their phone up and stare at a screen defeats the point of a product about the room you are in. Putting state in the Dynamic Island let the app stay useful while it was in a pocket.

Paywall after the first match, never at onboarding. Charging before delivering anything is how you teach a user that the product does not believe in itself.`,
  },
  {
    phase: 'Outcome',
    content: `The build reached a working simulator state with all three systems running: App Clip entry, Live Activity presence, and a RevenueCat subscription paywall. It was never submitted to the App Store, and I have since archived the project and taken the source private. I would rather say that plainly than dress up a prototype as a launch.`,
  },
  {
    phase: 'Lessons',
    content: `The App Clip decision is the one that generalises. Wherever there is a gap between intent and access, the interface should be measured in seconds, not features.

The thing I would do differently is validate the social premise before building the iOS surface. I built a good answer to a question I had not yet confirmed people were asking. That is the mistake I now design against first, and it is why my later work starts from observed behavior rather than a feature idea.`,
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
        <span
          style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}
        >
          Source private
        </span>
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
          An iOS social discovery app designed for real-world connection: at events, on campuses, in the moments when proximity is already doing the work. Full subscription paywall, App Clip, Dynamic Island, Live Activity.
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
            SwiftUI codebase covering the App Clip, Dynamic Island Live Activity, and RevenueCat paywall. Source is private, but I am happy to walk through the design decisions.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:tanmaysangam018@gmail.com?subject=ArrowMeet%20code%20walkthrough"
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
