'use client';

const SKILL_GROUPS = [
  {
    label: 'Design',
    skills: [
      'Figma', 'User research', 'Wireframing', 'Prototyping',
      'Design systems', 'Information architecture', 'User flows',
      'Usability testing', 'Interaction design', 'Design thinking',
      'SwiftUI (iOS UI)', 'Three.js (3D UI)',
    ],
  },
  {
    label: 'Product & Strategy',
    skills: [
      'Product roadmap', 'User story mapping', 'Jobs-to-be-done',
      'Competitive analysis', 'GTM operations', 'Behavioral science',
      'Monetization design (Stripe · RevenueCat)', 'A/B framing',
      'Stakeholder management', 'Enterprise pitching',
    ],
  },
  {
    label: 'Engineering',
    skills: [
      'React', 'Next.js', 'SwiftUI / iOS', 'TypeScript',
      'Python (pandas, data pipelines)', 'FastAPI',
      'PostgreSQL', 'Redis', 'Supabase', 'Neon',
      'Claude API', 'Chrome Extension (MV3)', 'Three.js',
      'AI-directed builds (Claude Code)',
    ],
  },
  {
    label: 'Operations & Execution',
    skills: [
      'Cross-functional coordination', 'Event operations (3,000+ attendees)',
      'Budget oversight ($15K events)', 'Program management',
      'Process documentation', 'Community building (50→200 members)',
      'KPI tracking', 'Risk management',
    ],
  },
  {
    label: 'Content & Creative',
    skills: [
      'SEO writing', 'Content strategy', 'Podcast production (10+ eps)',
      'Published author (2 books)', 'Data journalism', 'LinkedIn newsletter (275 subs)',
    ],
  },
];

const CERTIFICATIONS = [
  { name: 'Design Thinking for Innovation', org: 'University of Virginia' },
  { name: 'PMI Prompt Engineering', org: 'PMI' },
  { name: 'AI, Business & the Future of Work', org: 'Lund University' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', borderBottom: '2px solid #000' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          SKILLS
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>
          Design first · then product · then engineering
        </div>
      </div>

      {/* Skill groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.label}
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              gap: '2rem',
              padding: '2rem 0',
              borderBottom: gi < SKILL_GROUPS.length - 1 ? '1px solid #e5e5e5' : 'none',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: gi === 0 ? '#000' : '#666',
                paddingTop: '4px',
                flexShrink: 0,
              }}
            >
              {group.label}
              {gi === 0 && (
                <div style={{ width: '24px', height: '2px', background: '#000', marginTop: '6px' }} />
              )}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    padding: '5px 12px',
                    border: gi === 0 ? '1.5px solid #000' : '1.5px solid #ccc',
                    lineHeight: 1,
                    transition: 'background 0.15s, color 0.15s',
                    cursor: 'default',
                    display: 'inline-block',
                    color: gi === 0 ? '#000' : '#555',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = gi === 0 ? '#000' : '#555';
                    e.currentTarget.style.borderColor = gi === 0 ? '#000' : '#ccc';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications, design-relevant only */}
      <div style={{ marginTop: '4rem', borderTop: '2px solid #000', paddingTop: '3rem' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>
          Relevant Certifications
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0', border: '2px solid #000' }}>
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.name}
              style={{
                padding: '1.25rem 1.5rem',
                borderRight: i < CERTIFICATIONS.length - 1 ? '2px solid #000' : 'none',
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{cert.name}</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>{cert.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
