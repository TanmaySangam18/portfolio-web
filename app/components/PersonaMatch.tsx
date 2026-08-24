'use client';
import { useState } from 'react';

/* ─── Persona data ─── */
const PERSONAS = [
  {
    id: 'founder',
    label: 'Founder',
    sublabel: 'Early-stage / Startup',
    resumeFile: '/resumes/founder.pdf',
    claim: 'YOU NEED SOMEONE WHO FIGURES IT OUT.',
    pitch: `You don't need a specialist. You need the person who picks up whatever's on fire and puts it out — then builds the system so it doesn't catch fire again. That's what I do. I've shipped 9 products without an engineering team, run $15K events for 3,000 people, and built communities from zero. I'm not precious about job titles. I care about the problem getting solved.`,
    proofs: [
      {
        stat: '9 products',
        detail: 'Shipped end-to-end — web apps, iOS apps, Chrome extensions, AI agents — with no co-founder, no engineering hire.',
      },
      {
        stat: '$15K · 3,000 people',
        detail: 'Ran three campus events at scale, coordinating vendors, sponsors (Red Bull), student orgs, and university admin simultaneously.',
      },
      {
        stat: '0 → 200 members',
        detail: 'Built a community from scratch in 12 months — programming, onboarding, retention. 80%+ attendance through consistent cadence.',
      },
      {
        stat: 'MBTA Directors',
        detail: 'Researched, built, and formally pitched a behavioral science transit platform to department heads. Full demo + enterprise proposal.',
      },
    ],
    projects: ['BostonOnline', 'ArrowMeet', 'Agent Earth'],
    cta: 'See all 9 products →',
    ctaHref: '#work',
    color: '#000',
  },
  {
    id: 'ops',
    label: 'Operations Recruiter',
    sublabel: 'Ops · Program Manager · Chief of Staff',
    resumeFile: '/resumes/ops.pdf',
    claim: 'YOU NEED SOMEONE WHO MAKES COMPLEXITY DISAPPEAR.',
    pitch: `I've already done it at city level. I designed a behavioral science transit platform targeting $25M in annual MBTA fare evasion, built the full product solo, and walked it into a room of MBTA department directors with an enterprise proposal and financial model. That's the pattern: I find the broken system, build the fix, and see it through. MS in Project Management (STEM, Northeastern). No sponsorship needed. No lottery. Available now.`,
    proofs: [
      {
        stat: 'MBTA directors',
        detail: 'Designed, built, and pitched a $25M transit compliance platform to MBTA department heads — full product demo, enterprise proposal, 90-day pilot model.',
      },
      {
        stat: '5+ teams, 0 overruns',
        detail: 'Coordinated vendors, student orgs, and university admin across three consecutive $15K events — 3,000+ attendees, zero cost overruns.',
      },
      {
        stat: 'Built from zero',
        detail: 'Created an intern intake pipeline at Rinima Insights with no prior system: rubrics, onboarding, evaluation — 5+ hires placed through it.',
      },
      {
        stat: '0 → 200 members',
        detail: 'Built community programming, onboarding, and engagement from scratch. 80%+ attendance retention across 4× monthly events.',
      },
    ],
    projects: ['BostonOnline', 'FoundlyHire', 'Simply Done 2.0'],
    cta: 'See experience →',
    ctaHref: '#experience',
    color: '#1d4ed8',
  },
  {
    id: 'hr',
    label: 'HR / People Ops',
    sublabel: 'Talent · I/O Psychology · People Programs',
    resumeFile: '/resumes/hr.pdf',
    claim: 'YOU NEED SOMEONE WHO UNDERSTANDS HUMAN SYSTEMS.',
    pitch: `I studied I/O psychology because I understood early that organizations are human problems wearing business clothes. I've built hiring pipelines, designed engagement programs, conducted org assessments, and delivered client-facing reports with zero revision requests. My BTech is in Computer Science and Business Systems — so I think in processes and people simultaneously.`,
    proofs: [
      {
        stat: 'I/O Psychology',
        detail: 'Applied industrial-organizational frameworks to 3+ organizational assessments at Rinima Insights. Zero revision requests on client deliverables.',
      },
      {
        stat: 'Hiring pipeline',
        detail: 'Built intake rubrics, structured interviews, and onboarding for a firm that had no hiring process. 5+ hires placed through the system.',
      },
      {
        stat: '50 → 200 members',
        detail: 'Scaled the GITAM Writers Club membership 4× in 12 months by designing programming cadence, onboarding, and engagement from scratch.',
      },
      {
        stat: 'HR Cert',
        detail: 'Preparing to Manage Human Resources — University of Minnesota. Design Thinking for Innovation — University of Virginia.',
      },
    ],
    projects: ['FoundlyHire', 'Sangam', 'The Founder Profile'],
    cta: 'See skills in full →',
    ctaHref: '#skills',
    color: '#7c3aed',
  },
  {
    id: 'vc',
    label: 'VC / Investor',
    sublabel: 'Product · Business Model · Market Thinking',
    resumeFile: '/resumes/vc.pdf',
    claim: 'YOU NEED SOMEONE WHO THINKS IN PRODUCTS AND MARKETS.',
    pitch: `I don't build toys. Every product I've shipped is a real business: Stripe payments, RevenueCat subscriptions, live users, and a market thesis. BostonOnline models $500K–$2M Year 1 return on a $25M annual fare evasion problem. Tattva has a paying-tier infrastructure. ArrowMeet has a RevenueCat paywall and is ready for App Store submission. I think about distribution, retention, and monetization from day one.`,
    proofs: [
      {
        stat: '$25M problem',
        detail: 'BostonOnline addresses MBTA fare evasion. Modeled a 90-day Green Line pilot at zero cost with projected $500K–$2M Year 1 ROI. Formally presented to department directors.',
      },
      {
        stat: 'Live revenue infra',
        detail: 'Tattva has Stripe payments in production. Tattva.so has RevenueCat ($12/mo, $96/yr, $79 lifetime). RESOLVE targets 300 paying users at $6/mo.',
      },
      {
        stat: '9 shipped, 0 engineers',
        detail: 'Built a full product portfolio — web, iOS, Chrome extension, AI agents — using AI-directed development. This is what lean looks like at the idea stage.',
      },
      {
        stat: 'Real users',
        detail: 'Simply Done 2.0 is live and used by Northeastern students. BostonOnline has a working demo. Tattva is live on Vercel with a Chrome extension shipped.',
      },
    ],
    projects: ['BostonOnline', 'Tattva', 'Tattva.so'],
    cta: 'See all products →',
    ctaHref: '#work',
    color: '#059669',
  },
  {
    id: 'creative',
    label: 'Creative / Brand',
    sublabel: 'Content · Writing · Editorial · Storytelling',
    resumeFile: '/resumes/creative.pdf',
    claim: 'YOU NEED SOMEONE WHO MAKES IDEAS LAND.',
    pitch: `I'm a published author who runs a newsletter, produced a podcast series, and wrote SEO editorial for a startup ecosystem nonprofit. I write for the reader in front of me — not for the algorithm, not for the brief. Two published books. 275+ newsletter subscribers across 12 months without a single missed edition. Ten podcast episodes on technology and entrepreneurship. I understand voice, pacing, and what makes someone keep reading.`,
    proofs: [
      {
        stat: '2 published books',
        detail: '"A Girl with a Nose Ring and Poetry" (Amazon.in) and "EUPHORIA" — a co-authored anthology with The Quill House (Amazon). Both available globally.',
      },
      {
        stat: '275 subscribers',
        detail: 'The Polygon newsletter — LinkedIn, 4× monthly, 12+ months of consistent publishing. Zero missed editions.',
      },
      {
        stat: '10+ podcast episodes',
        detail: 'Content Team Lead for Gi-Talks at GITAM — launched the university\'s first-ever podcast series covering tech and entrepreneurship.',
      },
      {
        stat: 'Editorial + SEO',
        detail: 'Produced weekly SEO content for Startup Boston, managed the WordPress editorial calendar, and aligned content strategy with CRM-informed audience targeting.',
      },
    ],
    projects: ['The Polygon', 'The Founder Profile', 'MUTE'],
    cta: 'See writing →',
    ctaHref: '#writing',
    color: '#b45309',
  },
] as const;

type PersonaId = typeof PERSONAS[number]['id'];

export default function PersonaMatch() {
  const [active, setActive] = useState<PersonaId>('founder');

  const persona = PERSONAS.find((p) => p.id === active)!;

  return (
    <section
      id="why-me"
      style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}
    >
      {/* Section header */}
      <div
        style={{
          marginBottom: '3rem',
          borderBottom: '2px solid #000',
          paddingBottom: '1.5rem',
        }}
      >
        <div
          className="font-display"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '0.5rem' }}
        >
          WHY ME
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
          Select who you are — the section reconfigures for your need
        </div>
      </div>

      {/* Persona selector */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0',
          marginBottom: '4rem',
          border: '2px solid #000',
        }}
      >
        {PERSONAS.map((p) => {
          const isActive = p.id === active;
          return (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                flex: '1 1 160px',
                padding: '1.25rem 1.5rem',
                border: 'none',
                borderRight: '2px solid #000',
                borderBottom: 'none',
                background: isActive ? '#000' : 'transparent',
                color: isActive ? '#fff' : '#000',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.18s, color 0.18s',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = '#f0f0f0';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '3px',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}
              >
                {p.label}
              </div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: isActive ? 0.7 : 0.5,
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}
              >
                {p.sublabel}
              </div>
            </button>
          );
        })}
        {/* Last button has no right border */}
        <style>{`
          div[data-persona-selector] button:last-child { border-right: none; }
        `}</style>
      </div>

      {/* Active persona content */}
      <div
        key={active}
        className="persona-content-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left col: claim + pitch */}
        <div>
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
              marginBottom: '1.75rem',
              color: persona.color,
              lineHeight: 1.0,
            }}
          >
            {persona.claim}
          </div>
          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.78,
              color: '#333',
              margin: 0,
            }}
          >
            {persona.pitch}
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a
              href={persona.ctaHref}
              style={{
                display: 'inline-block',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#fff', background: '#000',
                padding: '10px 20px', textDecoration: 'none',
              }}
            >
              {persona.cta}
            </a>
            {'resumeFile' in persona && (persona as {resumeFile: string}).resumeFile && (
              <a
                href={(persona as {resumeFile: string}).resumeFile}
                download={`TanmaySangam_Resume_${persona.id}.pdf`}
                style={{
                  display: 'inline-block',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#000',
                  border: '2px solid #000', padding: '10px 20px', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
              >
                Download resume ↓
              </a>
            )}
          </div>
        </div>

        {/* Right col: proof points */}
        <div>
          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '1.25rem',
            }}
          >
            Proof points
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {persona.proofs.map((proof, i) => (
              <div
                key={i}
                className="two-col-grid"
                style={{
                  padding: '1.25rem 0',
                  borderBottom: i < persona.proofs.length - 1 ? '1px solid #e5e5e5' : 'none',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-anton), sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: persona.color,
                    paddingTop: '2px',
                    lineHeight: 1.2,
                  }}
                >
                  {proof.stat}
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: '#444',
                  }}
                >
                  {proof.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
