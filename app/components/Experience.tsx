'use client';

const ROLES = [
  {
    title: 'Volunteer Software Contributor',
    org: 'Humanitarians AI',
    period: 'Oct 2026 – Nov 2026',
    location: 'Remote',
    bullets: [
      'Built and merged an email scraper module for an open-source humanitarian AI initiative; contributed to active production codebase within a defined project window',
    ],
  },
  {
    title: 'Newsletter Creator & Editor',
    org: 'The Polygon',
    period: 'Jan 2025 – Present',
    location: 'Remote',
    bullets: [
      '275+ subscribers · 4× monthly cadence · 12+ months · 0 missed editions',
      'Covers operations, product strategy, and system thinking for early-career professionals',
    ],
  },
  {
    title: 'Content Strategist',
    org: 'Startup Boston',
    period: 'Dec 2024 – Dec 2025',
    location: 'Boston, MA',
    bullets: [
      'Managed editorial pipeline and produced SEO content for Boston\'s startup ecosystem nonprofit; published 5+ bylined articles on startupbos.org',
      'Weekly publishing cadence, WordPress CMS, 3,000+ member founder and operator community',
    ],
  },
  {
    title: 'Campus Ambassador',
    org: 'Adobe',
    period: 'Nov 2024 – Apr 2025',
    location: 'Boston, MA',
    bullets: [
      'Ran 3+ product workshops for 150+ students; owned activation strategy and performance reporting to Adobe\'s national brand team',
      'Primary liaison between student communities and Adobe\'s central operations. Coordinated cross-functionally on communications, logistics, and engagement metrics',
    ],
  },
  {
    title: 'Web Content Writer',
    org: 'Yo! Vizag',
    period: 'Dec 2023 – Jan 2024',
    location: 'Visakhapatnam, India',
    bullets: [
      'Published 172 articles across six beats in under two months — up to 10 pieces per day for Visakhapatnam\'s leading digital news platform',
      'Covered civic issues, heritage, travel, entertainment, food, and culture; maintained daily deadlines across breaking news and long-form feature formats',
    ],
  },
  {
    title: 'Operations Associate',
    org: 'Rinima Insights',
    period: 'Jun 2023 – May 2024',
    location: 'Remote',
    bullets: [
      'Partnered with CEO across 10+ client consulting engagements, contributing to business case development, project scoping, and strategic recommendations for a boutique I/O consulting firm',
      'Built firm\'s recruiting and onboarding pipeline from scratch: intake criteria, evaluation rubrics, structured onboarding for 5+ hires, which cut ramp time ~50%',
      'Applied I/O psychology and organizational assessment frameworks to 3+ client engagements; produced analytical reports delivered with zero revision requests',
    ],
  },
  {
    title: 'Content Team Lead',
    org: 'GITAM University',
    period: 'Feb 2023 – Oct 2023',
    location: 'Visakhapatnam, India',
    bullets: [
      'Launched GITAM\'s first-ever podcast series (Gi-Talks): produced and published 10+ episodes on technology and entrepreneurship',
      'Led content team across written, audio, and visual formats for university-level communications',
    ],
  },
  {
    title: 'Technical & Projects Lead',
    org: 'GUSAC, GITAM University',
    period: 'Jul 2022 – Jun 2023',
    location: 'Visakhapatnam, India',
    bullets: [
      'Managed end-to-end operations for 3 large-scale events serving 3,000+ participants on a $15K budget. Owned planning, vendor coordination, 5+ cross-functional teams, and post-event reporting',
      'Identified and closed Red Bull as first-ever brand activation partner via cold outreach; developed the business case and managed the partnership end-to-end',
      'Built unified logistics and documentation system adopted across all teams; tracked performance metrics and surfaced improvements across 3 concurrent workstreams',
    ],
  },
  {
    title: 'Campus Ambassador',
    org: 'TEDx GITAMVizag',
    period: '2022 – 2023',
    location: 'Visakhapatnam, India',
    bullets: [
      'Managed outreach and audience mobilization for TEDx events on campus; handled social media promotion and speaker coordination',
    ],
  },
  {
    title: 'Stakeholder Relations Coordinator',
    org: 'GITAM University, External Relations',
    period: 'Jul 2022 – Jun 2023',
    location: 'Visakhapatnam, India',
    bullets: [
      'Managed institutional stakeholder communications and external partnership coordination under the Deputy Director for External & Alumni Relations',
      'Served as 1 of 7 operational leads at GITAM Homecoming 2022, coordinating logistics, stakeholder alignment, and cross-team execution for the university\'s flagship annual event',
    ],
  },
  {
    title: 'President',
    org: 'Writers Club, GITAM University',
    period: 'Apr 2022 – Jun 2023',
    location: 'Visakhapatnam, India',
    bullets: [
      'Scaled organization from 50 to 200 members in 12 months by building engagement system, onboarding infrastructure, and monthly programming cadence from zero',
      'Tracked retention and engagement metrics; maintained 80%+ attendance across 4× monthly events; formal onboarding reduced ramp time ~50%',
    ],
  },
  {
    title: 'Technical Associate',
    org: 'ISRO (Indian Space Research Organisation)',
    period: 'May 2022 – Jun 2022',
    location: 'Sriharikota, India',
    bullets: [
      'Built Python tooling and produced technical documentation at India\'s national space agency',
    ],
  },
  {
    title: 'Web Development Intern',
    org: 'Fouses',
    period: 'Sep 2020 – Oct 2020',
    location: 'Remote',
    bullets: [
      'Contributed to website development projects; gained foundational exposure to web build and client delivery workflows',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'MS in Project Management (STEM)',
    school: 'Northeastern University',
    period: 'Sep 2024 – Jun 2026',
    location: 'Boston, MA',
    note: 'GPA: 3.606 · Graduate Student Government Member',
  },
  {
    degree: 'BTech in Computer Science & Business Systems',
    school: 'GITAM University',
    period: '2019 – 2023',
    location: 'Visakhapatnam, India',
    note: 'GITAM Young Leadership Program, 1 of 70 selected from hundreds across 3 campuses',
  },
  {
    degree: 'Class XII (CBSE)',
    school: 'Narayana Junior College',
    period: '2017 – 2019',
    location: 'Visakhapatnam, India',
    note: 'Science stream — Mathematics, Physics, Chemistry',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 2rem', borderBottom: '1px solid #302820', background: '#1c1a17' }}>
      {/* Header */}
      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', border: '1px solid #e35342', color: '#e35342', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: '100px' }}>
          ✦ Experience
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid #302820', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ede7df' }}>
          EXPERIENCE
        </div>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a3e38' }}>
          Operations · Product · Execution
        </div>
      </div>

      {/* Role list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {ROLES.map((role, i) => (
          <div
            key={`${role.org}-${i}`}
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              gap: '2rem',
              padding: '2.5rem 0',
              borderBottom: i < ROLES.length - 1 ? '1px solid #28221c' : 'none',
              alignItems: 'start',
            }}
          >
            {/* Left: meta */}
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '4px' }}>
                {role.period}
              </div>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>
                {role.location}
              </div>
            </div>

            {/* Right: content */}
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '2px', color: '#ede7df' }}>{role.title}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '0.75rem' }}>
                {role.org}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {role.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.65,
                      color: '#887d72',
                      paddingLeft: '1rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.55em',
                        width: '3px',
                        height: '3px',
                        background: '#3a3020',
                        borderRadius: '50%',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: '5rem', borderTop: '1px solid #302820', paddingTop: '3rem' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '2rem' }}>
          Education
        </div>
        {EDUCATION.map((edu, i) => (
          <div
            key={edu.school}
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              gap: '2rem',
              padding: '1.5rem 0',
              borderBottom: i < EDUCATION.length - 1 ? '1px solid #28221c' : 'none',
            }}
          >
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a3e38' }}>{edu.period}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020', marginTop: '4px' }}>{edu.location}</div>
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '2px', color: '#ede7df' }}>{edu.degree}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '6px' }}>{edu.school}</div>
              <div style={{ fontSize: '0.82rem', color: '#5a4f47', lineHeight: 1.55 }}>{edu.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
