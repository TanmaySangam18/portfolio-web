'use client';

const DOMAINS = [
  {
    label: 'Writing — Technical & Non-Technical',
    body: `Words are how I think. I've written across every register: technical documentation at ISRO, SEO editorial at Startup Boston, a LinkedIn newsletter read by 275+ subscribers, and two published books. I write precisely because I can't hide behind jargon — every product I've built started as a written spec, every proposal I've shaped started as a clear argument. Whether the audience is a transit authority director, a founding team, or a general reader, I write to the level of the idea, not the credentials of the room.`,
  },
  {
    label: 'Human Resources & I/O Psychology',
    body: `At Rinima Insights, I partnered with a CEO across 10+ client engagements and built the recruiting and onboarding pipeline from scratch — intake rubrics, structured onboarding, evaluation frameworks — for a firm with no prior system. I applied industrial-organizational psychology frameworks to organizational assessments and delivered client-facing reports with zero revision requests. I understand that organizations are human systems: they break at the same points human attention breaks, and they scale when the right feedback loops are designed in from the start. My MS program formalized that intuition with coursework in HR management, leadership, and organizational behavior.`,
  },
  {
    label: 'Product Development & Design',
    body: `I've shipped 9 products — a live AI web app with Stripe payments and a Chrome extension, two iOS apps using SwiftUI, a persistent multi-agent AI civilization with a Three.js 3D Earth, a stress-reset PWA, and a behavioral science civic platform formally presented to MBTA directors. None of these had an engineering team. I directed every build: writing user flows, designing feature scope, defining the data model, directing AI agents through implementation, and managing the full product lifecycle from idea to deployed demo. Design for me is not decoration — it's the decision about what the user sees first and what they do next.`,
  },
  {
    label: 'Project Management',
    body: `The credential followed the practice. Before my MS, I coordinated $15K events for 3,000 people across 5+ cross-functional teams — vendors, university admin, student orgs, and a Red Bull sponsorship, simultaneously, with zero budget overruns across three consecutive runs. I built a 200-person community programming cadence with 80%+ attendance retention. I designed the full organizational pipeline for a consulting firm that had no prior system — intake rubrics, evaluation criteria, onboarding — and 5+ hires went through it. My MS in Project Management (STEM, Northeastern, GPA 3.606) formalized what I'd already built the instinct for: stakeholder mapping, risk frameworks, earned value analysis. Project management is the discipline of making things happen on time, on budget, at the quality that makes people come back.`,
  },
  {
    label: 'Business Systems & Operations',
    body: `I built a logistics coordination system at GUSAC that was adopted across five cross-functional teams — running three consecutive $15K events for 3,000+ attendees without a single cost overrun. At Rinima Insights, I designed the firm's entire recruiting and onboarding infrastructure from scratch: intake rubrics, evaluation criteria, onboarding workflow, zero prior process to build from. At city scale, I mapped the stakeholder dependencies behind MBTA's $25M annual fare evasion problem, modeled a behavioral compliance system, and formally presented it to department directors. The BTech in Computer Science and Business Systems gave me the framework for reading how technology decisions become organizational outcomes. The work gave me the instinct for where systems break and what to build first.`,
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '6rem 2rem', borderBottom: '2px solid #000', background: '#fafafa' }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '2rem',
          marginBottom: '4rem',
          borderBottom: '2px solid #000',
          paddingBottom: '1.5rem',
        }}
      >
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          ABOUT
        </div>
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#666',
          }}
        >
          What I actually know how to do
        </div>
      </div>

      {/* Opening statement — full width */}
      <div
        style={{
          maxWidth: '860px',
          marginBottom: '5rem',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.65,
            color: '#111',
          }}
        >
          I&apos;m a product manager who ships. 9 products built without an engineering team — from a
          behavioral science platform formally presented to MBTA directors, to a live AI web app
          with Stripe payments, to an iOS dating app ready for the App Store. I define the problem,
          make the product decision, and own the outcome. The through-line across every role and
          every build is the same: I find the thing that doesn&apos;t exist, figure out how it should
          work, and make it real.
        </p>
      </div>

      {/* Domain cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {DOMAINS.map((domain, i) => (
          <div
            key={domain.label}
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '3rem',
              padding: '3rem 0',
              borderBottom: i < DOMAINS.length - 1 ? '1px solid #ddd' : 'none',
              alignItems: 'start',
            }}
          >
            {/* Left: domain label */}
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                lineHeight: 1.2,
                paddingTop: '4px',
                color: '#000',
              }}
            >
              {domain.label.toUpperCase()}
            </div>

            {/* Right: paragraph */}
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: '#333',
                margin: 0,
              }}
            >
              {domain.body}
            </p>
          </div>
        ))}
      </div>

      {/* Closing quote */}
      <div
        style={{
          marginTop: '5rem',
          padding: '2.5rem',
          border: '2px solid #000',
          background: '#000',
          color: '#fff',
        }}
      >
        <div
          className="font-display"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)', marginBottom: '1rem', lineHeight: 1.1 }}
        >
          EVERY PROJECT IS A SYSTEM. EVERY SYSTEM IS A HUMAN PROBLEM IN DISGUISE.
        </div>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#ccc', maxWidth: '600px' }}>
          I map the humans first — stakeholders, incentives, friction points — then build the
          structure around them. That&apos;s why the products work, the communities grow, and the events
          don&apos;t fall apart.
        </p>
      </div>
    </section>
  );
}
