'use client';
import { useState, useEffect, useRef } from 'react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

type Project = {
  num: string;
  name: string;
  sub: string;
  tags: string[];
  desc: string;
  outcome: string;
  status: string;
  statusColor: string;
  link: string | null;
  linkNote: string | null;
  caseStudy: string | null;
  stack: string[];
  role: string;
};

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'BostonOnline',
    sub: 'MBTA Fare Compliance Platform',
    tags: ['Product Strategy', 'Behavioral Design', 'Civic Tech'],
    desc: 'Behavioral-science-backed fare compliance platform. Reframed riders as participants rather than violators using FarePoints rewards, GPS-verified check-ins, and a three-sided marketplace connecting riders, local businesses, and MBTA admin. I owned the problem framing, the incentive model, and the end-to-end product architecture.',
    outcome: 'Formally presented to MBTA department directors. 90-day Green Line pilot proposed at zero cost to the agency. Modeled $500K–$2M Year 1 revenue recovery against a $25M annual fare-evasion problem.',
    status: 'Pilot Proposed',
    statusColor: '#f59e0b',
    link: null,
    linkNote: 'Demo is access-controlled — walkthrough available on request',
    caseStudy: '/case-study/bostonline',
    stack: ['Next.js', 'Expo', 'Neon PostgreSQL', 'Clerk', 'Turborepo'],
    role: 'Product strategy · behavioral design · full-stack architecture',
  },
  {
    num: '02',
    name: 'competitor.inc',
    sub: 'Autonomous Software Company',
    tags: ['Product Strategy', 'AI Systems', 'Full-Stack Eng'],
    desc: 'Prove it before you build it. A 56-role AI org hierarchy validates demand, builds and deploys real software, then operates it. Every consequential action stays human-in-the-loop through a signed, capped, revocable mandate — the governance model is the product.',
    outcome: 'Live and shipping. 2 real builds delivered at $0.13/build. Three-tier subscription model (Validate / Operator / Founder) with Polar payments integrated. 588 commits.',
    status: 'Live',
    statusColor: '#22c55e',
    link: 'https://competitor-inc-zeta.vercel.app',
    linkNote: null,
    caseStudy: null,
    stack: ['Next.js 16', 'TypeScript', 'Claude API', 'Supabase', 'Polar'],
    role: 'Sole designer + engineer · 588 commits',
  },
  {
    num: '03',
    name: 'ArrowMeet',
    sub: 'iOS Social Discovery App',
    tags: ['Product Management', 'iOS Design', 'Consumer'],
    desc: 'iOS app built for real-world connection at events and campuses. Full experience: onboarding, matching flow, Dynamic Island integration, subscription paywall, and App Clip for frictionless first-run entry.',
    outcome: 'Working simulator build with Live Activity, Dynamic Island, and RevenueCat paywall. Written up as a product case study covering the design decisions and trade-offs.',
    status: 'Case Study',
    statusColor: '#6366f1',
    link: null,
    linkNote: 'Source is private — design decisions documented in the case study',
    caseStudy: '/case-study/arrowmeet',
    stack: ['SwiftUI', 'Supabase', 'RevenueCat', 'Fastlane'],
    role: 'Product + design + iOS implementation',
  },
  {
    num: '05',
    name: 'Agent Earth',
    sub: 'Persistent AI Civilization',
    tags: ['Product Strategy', 'AI/ML', 'Systems Design'],
    desc: 'AI agents representing real users inhabit a shared 3D Earth. I designed the information architecture: how agents form memory, how relationships surface in the UI, and how a 12-minute day/night cycle maps onto human-readable state.',
    outcome: 'Prototype reached real-time agent conversation over WebSockets with a running day/night cycle. Documented as a systems-design case study on modelling agent memory and relationships.',
    status: 'Case Study',
    statusColor: '#6366f1',
    link: null,
    linkNote: 'Prototype archived — architecture documented in the case study',
    caseStudy: '/case-study/agent-earth',
    stack: ['Next.js', 'Three.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Claude API'],
    role: 'Product strategy · information architecture · systems design',
  },
];

type Principle = {
  num: string;
  title: string;
  body: string;
  tag: string;
};

const PRINCIPLES: Principle[] = [
  {
    num: '01',
    title: 'FIND THE MOMENT SOMEONE GIVES UP',
    body: "I don't start with wireframes. I start by locating the exact moment a person quits: the tap that goes nowhere, the fare gate they route around, the message they never send. On BostonOnline the real broken moment wasn't the gate jump; it was a rider deciding the system was against them. Design the fix for that moment and the screens follow.",
    tag: 'BostonOnline · MBTA',
  },
  {
    num: '02',
    title: 'DESIGN THE INCENTIVE, NOT THE ENFORCEMENT',
    body: "Most products solve behavior problems by adding friction or punishment. That reliably produces avoidance. The MBTA had a $25M fare-evasion problem framed as enforcement. I reframed riders as participants and built FarePoints — GPS-verified check-ins that made compliance the rewarding path. Same behavior, inverted incentive.",
    tag: 'FarePoints · $25M problem',
  },
  {
    num: '03',
    title: 'RESTRAINT IS A FEATURE',
    body: "What a product refuses to show is a design decision with more weight than most layouts. On Blip, identities are revealed only when notice is mutual. The entire product is built around what stays hidden. Deciding what not to build, not to surface, and not to notify is where trust is actually earned.",
    tag: 'Blip · mutual reveal',
  },
  {
    num: '04',
    title: 'SHIP IT, THEN WATCH WHERE PEOPLE HESITATE',
    body: "Polished mocks answer fewer questions than a rough build in someone's hands. I validate structure first and earn the right to refine. The signal I care about isn't what users say in a test. It's where they pause, backtrack, or quietly stop returning.",
    tag: 'Behavior · validation',
  },
];

type FieldStat = { value: string; label: string; x: string; y: string };

const FIELD_STATS: FieldStat[] = [
  { value: '588', label: 'COMMITS\nSHIPPED SOLO', x: '66%', y: '13%' },
  { value: '$25M', label: 'FARE-EVASION\nPROBLEM SCOPED', x: '10%', y: '30%' },
  { value: '3', label: 'MBTA DIRECTORS\nPITCHED', x: '78%', y: '52%' },
  { value: '275+', label: 'NEWSLETTER\nSUBSCRIBERS', x: '22%', y: '67%' },
  { value: '3K+', label: 'EVENT ATTENDEES\nMANAGED', x: '50%', y: '80%' },
  { value: '9+', label: 'ORGS &\nROLES', x: '38%', y: '22%' },
  { value: '2', label: 'PUBLISHED\nBOOKS', x: '63%', y: '83%' },
  { value: 'ISRO', label: "INDIA'S SPACE\nAGENCY · 2022", x: '13%', y: '53%' },
];

const SECTION_LABELS = ['Entry', 'Work', 'Principles', 'Field', 'Contact'];

/* ─── Shared style helpers ────────────────────────────────────────────────── */

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), sans-serif',
};

const display: React.CSSProperties = {
  fontFamily: 'var(--font-anton), sans-serif',
  textTransform: 'uppercase' as const,
};

const label: React.CSSProperties = {
  ...mono,
  fontSize: '0.62rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#aaa',
};

/* ─── Screen 0: Entry ─────────────────────────────────────────────────────── */

function EntryScreen({
  onNext,
  onSetLabel,
}: {
  onNext: () => void;
  onSetLabel: (l: string) => void;
}) {
  return (
    <section
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        background: '#F9F8F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1.75rem, 3.5vw, 3.5rem)',
      }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={label}>D. S. Tanmay Sangam</span>
        <span style={label}>Portfolio · 2026</span>
      </div>

      {/* Giant name */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        <h1
          style={{
            ...display,
            fontSize: 'clamp(4.5rem, 15vw, 12rem)',
            lineHeight: 0.88,
            color: '#0D0D0D',
            margin: 0,
            textAlign: 'center',
          }}
        >
          TANMAY
          <br />
          SANGAM
        </h1>
        <div
          style={{ width: 'min(480px, 75%)', height: '1px', background: 'rgba(0,0,0,0.1)' }}
        />
        <p
          style={{
            ...mono,
            fontSize: 'clamp(0.62rem, 0.9vw, 0.8rem)',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#888',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Product &nbsp;&middot;&nbsp; Operations &nbsp;&middot;&nbsp; Execution
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        {/* Availability */}
        <div>
          <div
            style={{
              ...mono,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#22c55e',
              marginBottom: 5,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#22c55e',
                flexShrink: 0,
              }}
            />
            Available Now
          </div>
          <div
            style={{
              ...mono,
              fontSize: '0.58rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#bbb',
            }}
          >
            OPT · No H-1B lottery · Boston, MA
          </div>
        </div>

        {/* Scroll hint */}
        <div
          role="button"
          tabIndex={0}
          onClick={onNext}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNext()}
          onMouseEnter={() => onSetLabel('explore')}
          onMouseLeave={() => onSetLabel('')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            cursor: 'none',
          }}
        >
          <span
            style={{
              ...mono,
              fontSize: '0.52rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#ccc',
            }}
          >
            scroll
          </span>
          <span style={{ ...mono, fontSize: '0.85rem', color: '#ccc' }}>↓</span>
        </div>

        {/* Stats */}
        <div style={{ textAlign: 'right' }}>
          {['588 commits', '3 case studies', '1 live product'].map((s) => (
            <div
              key={s}
              style={{
                ...mono,
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#444',
                marginBottom: 3,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Screen 1: Work ──────────────────────────────────────────────────────── */

function WorkScreen({ onSetLabel }: { onSetLabel: (l: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const p = selected !== null ? PROJECTS[selected] : null;

  const px = 'clamp(1.75rem, 3.5vw, 3.5rem)';

  return (
    <section
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: `clamp(1.75rem, 3.5vw, 3.5rem) ${px} 1.25rem`,
          borderBottom: '2px solid #0D0D0D',
          display: 'flex',
          alignItems: 'baseline',
          gap: '1.25rem',
          flexShrink: 0,
          flexWrap: 'wrap',
        }}
      >
        {p !== null && (
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelected(null)}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && setSelected(null)
            }
            onMouseEnter={() => onSetLabel('back')}
            onMouseLeave={() => onSetLabel('')}
            style={{
              ...mono,
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#999',
              cursor: 'none',
              marginRight: 4,
            }}
          >
            ← ALL WORK
          </div>
        )}
        <span
          style={{
            ...display,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#0D0D0D',
            lineHeight: 1,
          }}
        >
          {p ? p.name : 'WORK'}
        </span>
        {!p && (
          <span
            style={{
              ...mono,
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#999',
            }}
          >
            3 case studies · 2 live products · MBTA directors pitched
          </span>
        )}
        {p && (
          <span
            style={{
              ...mono,
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: p.statusColor,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: p.statusColor,
              }}
            />
            {p.status}
          </span>
        )}
      </div>

      {/* Scrollable content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: `0 ${px} clamp(2rem, 4vw, 3.5rem)`,
        }}
      >
        {p === null ? (
          /* ── Project list ── */
          <div>
            {PROJECTS.map((proj, i) => (
              <div
                key={proj.num}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(i)}
                onKeyDown={(e) =>
                  (e.key === 'Enter' || e.key === ' ') && setSelected(i)
                }
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = '#F9F9F7';
                  onSetLabel('open');
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                  onSetLabel('');
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem 0',
                  borderBottom:
                    i < PROJECTS.length - 1 ? '1px solid #ebebeb' : 'none',
                  cursor: 'none',
                  transition: 'background 0.15s',
                  marginTop: i === 0 ? '0.5rem' : 0,
                }}
              >
                <span
                  style={{
                    ...mono,
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#ccc',
                  }}
                >
                  {proj.num}
                </span>
                <div>
                  <div
                    style={{
                      ...display,
                      fontSize: 'clamp(1.2rem, 2.8vw, 1.85rem)',
                      color: '#0D0D0D',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {proj.name}
                  </div>
                  <div
                    style={{
                      ...mono,
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#aaa',
                    }}
                  >
                    {proj.sub}
                  </div>
                </div>
                <span
                  style={{
                    ...mono,
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: proj.statusColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: proj.statusColor,
                    }}
                  />
                  {proj.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* ── Project detail ── */
          <div style={{ paddingTop: '1.75rem', maxWidth: 680 }}>
            <div
              style={{
                ...mono,
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#aaa',
                marginBottom: '1.25rem',
              }}
            >
              {p.sub} &nbsp;·&nbsp; {p.role}
            </div>

            <div
              style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: '1.5rem' }}
            >
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    ...mono,
                    fontSize: '0.57rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '2px 7px',
                    border: '1.5px solid #0D0D0D',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              style={{
                ...mono,
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#333',
                marginBottom: '1.5rem',
              }}
            >
              {p.desc}
            </p>

            <div
              style={{
                background: '#0D0D0D',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: '0.52rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#555',
                  marginBottom: 6,
                }}
              >
                Outcome
              </div>
              <div
                style={{
                  ...mono,
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  color: '#ddd',
                }}
              >
                {p.outcome}
              </div>
            </div>

            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.75rem' }}
            >
              {p.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    ...mono,
                    fontSize: '0.57rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    border: '1.5px solid #ddd',
                    color: '#777',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {p.caseStudy && (
                <a
                  href={p.caseStudy}
                  onMouseEnter={() => onSetLabel('read')}
                  onMouseLeave={() => onSetLabel('')}
                  style={{
                    ...mono,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: '#0D0D0D',
                    padding: '10px 18px',
                    textDecoration: 'none',
                  }}
                >
                  Case Study →
                </a>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onSetLabel('visit')}
                  onMouseLeave={() => onSetLabel('')}
                  style={{
                    ...mono,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0D0D0D',
                    border: '2px solid #0D0D0D',
                    padding: '8px 16px',
                    textDecoration: 'none',
                  }}
                >
                  View Live →
                </a>
              )}
              {p.linkNote && (
                <span
                  style={{
                    ...mono,
                    fontSize: '0.65rem',
                    color: '#bbb',
                    lineHeight: 1.4,
                  }}
                >
                  {p.linkNote}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Screen 2: Principles ────────────────────────────────────────────────── */

function PrinciplesScreen({ onSetLabel }: { onSetLabel: (l: string) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const px = 'clamp(1.75rem, 3.5vw, 3.5rem)';

  return (
    <section
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        background: '#F4F3F0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: `clamp(1.75rem, 3.5vw, 3.5rem) ${px} 1.25rem`,
          borderBottom: '2px solid #0D0D0D',
          display: 'flex',
          alignItems: 'baseline',
          gap: '1.25rem',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            ...display,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#0D0D0D',
            lineHeight: 1,
          }}
        >
          HOW I DESIGN
        </span>
        <span
          style={{
            ...mono,
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#999',
          }}
        >
          4 principles · behavior-first
        </span>
      </div>

      {/* Two-panel layout */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          overflow: 'hidden',
        }}
      >
        {/* Left: principle titles */}
        <div
          style={{
            borderRight: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: `1.5rem ${px}`,
          }}
        >
          {PRINCIPLES.map((pr, i) => (
            <div
              key={pr.num}
              onMouseEnter={() => {
                setHovered(i);
                onSetLabel('read');
              }}
              onMouseLeave={() => {
                setHovered(null);
                onSetLabel('');
              }}
              style={{
                cursor: 'none',
                padding: '0.75rem 0',
                borderBottom: i < PRINCIPLES.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                transition: 'opacity 0.2s',
                opacity: hovered === null || hovered === i ? 1 : 0.3,
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}
              >
                <span
                  style={{
                    ...mono,
                    fontSize: '0.57rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#bbb',
                    flexShrink: 0,
                  }}
                >
                  {pr.num}
                </span>
                <span
                  style={{
                    ...display,
                    fontSize: 'clamp(0.85rem, 2.2vw, 1.5rem)',
                    color: hovered === i ? '#0D0D0D' : '#555',
                    lineHeight: 1.1,
                    transition: 'color 0.2s',
                    letterSpacing: '0.01em',
                  }}
                >
                  {pr.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: body panel */}
        <div
          style={{
            padding: `2rem ${px}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {hovered !== null ? (
            <div
              style={{
                animation: 'fadeIn 0.25s ease',
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: '0.57rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#bbb',
                  marginBottom: '1rem',
                }}
              >
                {PRINCIPLES[hovered].tag}
              </div>
              <p
                style={{
                  ...mono,
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  color: '#444',
                  margin: 0,
                }}
              >
                {PRINCIPLES[hovered].body}
              </p>
            </div>
          ) : (
            <div
              style={{
                ...mono,
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ccc',
              }}
            >
              hover a principle
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Screen 3: Field ─────────────────────────────────────────────────────── */

function FieldScreen() {
  const px = 'clamp(1.75rem, 3.5vw, 3.5rem)';

  return (
    <section
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        background: '#0D0D0D',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner label */}
      <div
        style={{
          position: 'absolute',
          top: px,
          left: px,
          ...mono,
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#333',
        }}
      >
        Field Notes
      </div>

      {/* Scattered stats */}
      {FIELD_STATS.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            style={{
              ...display,
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              color: '#fff',
              lineHeight: 1,
              marginBottom: 5,
            }}
          >
            {s.value}
          </div>
          <div
            style={{
              ...mono,
              fontSize: '0.5rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#3a3a3a',
              whiteSpace: 'pre-line',
              lineHeight: 1.5,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: px,
          left: px,
          right: px,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: '0.57rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#333',
          }}
        >
          MS Project Management · Northeastern University · GPA 3.606
        </div>
        <a
          href="/resumes/pm.pdf"
          download="TanmaySangam_ProductManager.pdf"
          style={{
            ...mono,
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#fff',
            border: '1.5px solid #2a2a2a',
            padding: '7px 14px',
            textDecoration: 'none',
          }}
        >
          Resume ↓
        </a>
      </div>
    </section>
  );
}

/* ─── Screen 4: Contact ───────────────────────────────────────────────────── */

function ContactScreen({ onSetLabel }: { onSetLabel: (l: string) => void }) {
  const px = 'clamp(1.75rem, 3.5vw, 3.5rem)';

  return (
    <section
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: px,
      }}
    >
      {/* Top label */}
      <span style={label}>Contact</span>

      {/* Center */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2
          style={{
            ...display,
            fontSize: 'clamp(2.8rem, 10vw, 8rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            margin: '0 0 2.5rem',
          }}
        >
          LET&apos;S BUILD
          <br />
          SOMETHING.
        </h2>

        <a
          href="mailto:tanmaysangam018@gmail.com"
          onMouseEnter={() => onSetLabel('send')}
          onMouseLeave={() => onSetLabel('')}
          style={{
            ...mono,
            fontSize: 'clamp(0.72rem, 1.3vw, 0.95rem)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#0D0D0D',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            borderBottom: '2px solid #0D0D0D',
            paddingBottom: 3,
            width: 'fit-content',
            marginBottom: '2.5rem',
          }}
        >
          tanmaysangam018@gmail.com →
        </a>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/tanmaysangam' },
            { label: 'GitHub', href: 'https://github.com/TanmaySangam18' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onSetLabel('visit')}
              onMouseLeave={() => onSetLabel('')}
              style={{
                ...mono,
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0D0D0D',
                textDecoration: 'none',
                borderBottom: '1.5px solid #0D0D0D',
                paddingBottom: 2,
              }}
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            ...mono,
            fontSize: '0.58rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#bbb',
          }}
        >
          OPT · No H-1B lottery · No sponsorship · Available now · Boston, MA
        </span>
        <span
          style={{
            ...mono,
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#bbb',
          }}
        >
          tanmaysangam.vercel.app
        </span>
      </div>
    </section>
  );
}

/* ─── Main ────────────────────────────────────────────────────────────────── */

export default function ImmersivePortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorLabel, setCursorLabel] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  /* Track scroll → section */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const section = Math.round(container.scrollTop / window.innerHeight);
      setActiveSection(Math.min(section, SECTION_LABELS.length - 1));
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  /* Custom cursor tracking */
  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* Hide default cursor */
  useEffect(() => {
    document.body.classList.add('immersive-mode');
    return () => document.body.classList.remove('immersive-mode');
  }, []);

  const scrollTo = (i: number) => {
    containerRef.current?.scrollTo({
      top: i * window.innerHeight,
      behavior: 'smooth',
    });
  };

  const isOnDark = activeSection === 3;
  const dotColor = isOnDark ? '#fff' : '#0D0D0D';
  const dotFaint = isOnDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';

  return (
    <>
      {/* Cursor dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: dotColor,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background 0.3s',
        }}
      />
      {cursorLabel && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            left: cursorPos.x + 12,
            top: cursorPos.y - 10,
            ...mono,
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: dotColor,
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'color 0.3s',
          }}
        >
          {cursorLabel}
        </div>
      )}

      {/* Progress thread */}
      <nav
        aria-label="Page sections"
        style={{
          position: 'fixed',
          right: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        {SECTION_LABELS.map((sLabel, i) => (
          <button
            key={sLabel}
            onClick={() => scrollTo(i)}
            title={sLabel}
            aria-label={`Go to ${sLabel}`}
            style={{
              width: activeSection === i ? 7 : 4,
              height: activeSection === i ? 7 : 4,
              borderRadius: '50%',
              background: activeSection === i ? dotColor : dotFaint,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              flexShrink: 0,
              outline: 'none',
            }}
          />
        ))}
      </nav>

      {/* Snap container */}
      <div
        ref={containerRef}
        className="snap-container"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          overflowX: 'hidden',
        }}
      >
        <EntryScreen onNext={() => scrollTo(1)} onSetLabel={setCursorLabel} />
        <WorkScreen onSetLabel={setCursorLabel} />
        <PrinciplesScreen onSetLabel={setCursorLabel} />
        <FieldScreen />
        <ContactScreen onSetLabel={setCursorLabel} />
      </div>
    </>
  );
}
