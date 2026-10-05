'use client';
import { useState } from 'react';

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
  shot: string | null;
  stack: string[];
  role: string;
};

type ArchiveItem = {
  name: string;
  sub: string;
  stack: string;
  status: string;
  link: string | null;
};

const FEATURED: Project[] = [
  {
    num: '01',
    name: 'BostonOnline',
    sub: 'MBTA Fare Compliance Platform',
    tags: ['Product Strategy', 'Behavioral Design', 'Civic Tech'],
    desc: 'Behavioral-science-backed fare compliance platform. Reframed riders as participants rather than violators using FarePoints rewards, GPS-verified check-ins, and a three-sided marketplace connecting riders, local businesses, and MBTA admin. I owned the problem framing, the incentive model, and the end-to-end product architecture.',
    outcome: 'Formally presented to MBTA department directors. 90-day Green Line pilot proposed at zero cost to the agency. Modeled $500K-$2M Year 1 revenue recovery against a $25M annual fare-evasion problem.',
    status: 'Pilot Proposed',
    statusColor: '#f59e0b',
    link: null,
    linkNote: 'Demo is access-controlled - walkthrough available on request',
    caseStudy: '/case-study/bostonline',
    shot: null,
    stack: ['Next.js', 'Expo', 'Neon PostgreSQL', 'Clerk', 'Turborepo'],
    role: 'Product strategy - behavioral design - full-stack architecture',
  },
  {
    num: '02',
    name: 'competitor.inc',
    sub: 'Autonomous Software Company',
    tags: ['Product Strategy', 'AI Systems', 'Full-Stack Eng'],
    desc: 'Prove it before you build it. A 56-role AI org hierarchy validates demand, builds and deploys real software, then operates it. Every consequential action stays human-in-the-loop through a signed, capped, revocable mandate - the governance model is the product.',
    outcome: 'Live and shipping. 2 real builds delivered at $0.13/build. Three-tier subscription model (Validate / Operator / Founder) with Polar payments integrated. 588 commits.',
    status: 'Live',
    statusColor: '#22c55e',
    link: 'https://competitor-inc-zeta.vercel.app',
    linkNote: null,
    caseStudy: null,
    shot: '/shots/competitor-inc.png',
    stack: ['Next.js 16', 'TypeScript', 'Claude API', 'Supabase', 'Polar'],
    role: 'Sole designer + engineer - 588 commits',
  },
  {
    num: '03',
    name: 'ArrowMeet',
    sub: 'iOS Social Discovery App',
    tags: ['Product Management', 'iOS Design', 'Consumer'],
    desc: 'iOS app built for real-world connection at events and campuses. I designed the full experience: onboarding, matching flow, Dynamic Island integration, and the subscription paywall - plus an App Clip for frictionless first-run entry.',
    outcome: 'Reached a working simulator build with Live Activity, Dynamic Island, and a RevenueCat paywall. Written up as a product case study covering the design decisions and trade-offs.',
    status: 'Case Study',
    statusColor: '#6366f1',
    link: null,
    linkNote: 'Source is private - design decisions documented in the case study',
    caseStudy: '/case-study/arrowmeet',
    shot: null,
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
    linkNote: 'Prototype archived - architecture documented in the case study',
    caseStudy: '/case-study/agent-earth',
    shot: null,
    stack: ['Next.js', 'Three.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Claude API'],
    role: 'Product strategy - information architecture - systems design',
  },
];

const ARCHIVE: ArchiveItem[] = [
  { name: 'Bharat Ane Nenu', sub: 'Civic Accountability Dashboard', stack: 'Next.js 15 · TypeScript', status: 'Live', link: 'https://praja-lekka.vercel.app' },
  { name: 'FoundlyHire', sub: 'Personality-Based Hiring', stack: 'React · Supabase · AI Matching', status: 'Live', link: 'https://foundly-hire.vercel.app' },
  { name: 'Boston Deals', sub: 'Opt-In Local Offers', stack: 'Static · JS', status: 'Live', link: 'https://boston-deals-demo.vercel.app' },
  { name: 'Vizag Console', sub: 'Campaign Operations Console', stack: 'HTML · JS', status: 'Live', link: 'https://tanmaysangam18.github.io/vizag-console/' },
  { name: 'Mana Visakha', sub: 'Telugu-First Civic Tool', stack: 'HTML · JS · i18n', status: 'Live', link: 'https://tanmaysangam18.github.io/mana-visakha/' },
  { name: 'Kindred', sub: 'Book-Based People Matching', stack: 'HTML · JS · Static', status: 'Live', link: 'https://tanmaysangam18.github.io/kindred/' },
  { name: 'Threshold', sub: 'Goal-First Ad Relevance Gate', stack: 'Next.js · TypeScript', status: 'Live', link: 'https://threshold-psi-henna.vercel.app' },
  { name: 'The Door', sub: 'Bar for AI Agents + Humans', stack: 'HTML · JS · Node', status: 'Live', link: 'https://the-door-kohl.vercel.app' },
  { name: 'September', sub: 'Boston Civic Data Site', stack: 'Node · Static · Open Data', status: 'Live', link: 'https://september-ten.vercel.app' },
  { name: 'Tattva.so', sub: 'iOS Attention Mirror', stack: 'React Native · Expo · RevenueCat', status: 'In Development', link: null },
  { name: 'Simply Done 2.0', sub: 'AI Canvas LMS Companion', stack: 'React · Supabase · Canvas API', status: 'Built at Northeastern', link: null },
  { name: 'RoomieBot', sub: 'AI Household OS', stack: 'React · Gamification', status: 'Archived', link: null },
  { name: 'The Founder Profile', sub: 'Data Journalism Investigation', stack: 'Python · pandas · Data Viz', status: 'Research', link: null },
  { name: 'MUTE', sub: 'Creator Safety Platform', stack: 'Gemini · Firebase · Perspective API', status: 'Archived', link: null },
];

export default function Products() {
  const [archiveOpen, setArchiveOpen] = useState(false);

  return (
    <section id="work" style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          WORK
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          Featured · 3 case studies · 2 live products · MBTA directors pitched
        </div>
      </div>

      {/* Featured grid, 2 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(480px, 100%), 1fr))',
          gap: '0',
          border: '2px solid #000',
          marginBottom: '3rem',
        }}
      >
        {FEATURED.map((p, i) => (
          <div
            key={p.num}
            className="product-card"
            style={{
              padding: '2.5rem',
              borderRight: (i + 1) % 2 === 0 ? 'none' : '2px solid #000',
              borderBottom: i < FEATURED.length - 2 ? '2px solid #000' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f9f9f9')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 7px', border: '1.5px solid #000' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: p.statusColor,
                  border: `1.5px solid ${p.statusColor}`, padding: '2px 7px',
                  display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.statusColor, flexShrink: 0 }} />
                {p.status}
              </span>
            </div>

            {/* Screenshot */}
            {p.shot && (
              <a href={p.link ?? p.caseStudy ?? '#'} target={p.link ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'block', border: '2px solid #000', lineHeight: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.shot} alt={`${p.name} interface screenshot`} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </a>
            )}

            {/* Name */}
            <div>
              <div className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '3px' }}>
                {p.name}
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666' }}>
                {p.sub}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#888', marginTop: '6px', fontStyle: 'italic' }}>
                {p.role}
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#333', flexGrow: 1, margin: 0 }}>
              {p.desc}
            </p>

            {/* Outcome */}
            <div style={{ background: '#000', color: '#fff', padding: '12px 14px' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#888', marginBottom: '5px' }}>Outcome</div>
              <div style={{ fontSize: '0.78rem', lineHeight: 1.55, color: '#e5e5e5' }}>{p.outcome}</div>
            </div>

            {/* Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {p.stack.map((t) => (
                <span key={t} style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 6px', border: '1.5px solid #ccc', color: '#666' }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
              {p.caseStudy && (
                <a href={p.caseStudy} style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', background: '#000', padding: '8px 16px' }}>
                  Case study →
                </a>
              )}
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', borderBottom: '1.5px solid #000', paddingBottom: '1px' }}>
                  View live →
                </a>
              )}
              {p.linkNote && (
                <span style={{ fontSize: '0.66rem', color: '#999', lineHeight: 1.4 }}>
                  {p.linkNote}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Archive toggle */}
      <div style={{ border: '2px solid #000' }}>
        <button
          onClick={() => setArchiveOpen((v) => !v)}
          style={{
            width: '100%', padding: '1.25rem 2rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <span className="font-display" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
              MORE WORK
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888' }}>
              {ARCHIVE.length} additional projects
            </span>
          </div>
          <span className="font-display" style={{ fontSize: '1.5rem' }}>{archiveOpen ? '−' : '+'}</span>
        </button>

        {archiveOpen && (
          <div style={{ borderTop: '2px solid #000' }}>
            {ARCHIVE.map((p, i) => (
              <div
                key={p.name}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr auto',
                  gap: '1.5rem', padding: '1rem 2rem',
                  borderBottom: i < ARCHIVE.length - 1 ? '1px solid #e5e5e5' : 'none',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginTop: '2px' }}>{p.sub}</div>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#666' }}>{p.stack}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999' }}>{p.status}</span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', borderBottom: '1px solid #000', textDecoration: 'none' }}>↗</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
