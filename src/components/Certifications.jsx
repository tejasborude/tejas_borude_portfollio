import { motion } from 'framer-motion'
import { FiExternalLink, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'

const gradientMap = {
  'from-indigo-500 to-violet-600': 'linear-gradient(135deg, #6366f1, #7c3aed)',
  'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #2563eb)',
  'from-emerald-500 to-teal-600': 'linear-gradient(135deg, #10b981, #0d9488)',
}

function getGradient(cls) {
  return gradientMap[cls] || 'linear-gradient(135deg, #6366f1, #06b6d4)'
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-bg" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem', color: 'var(--text-2)',
            maxWidth: 500, margin: '1rem auto 0', lineHeight: 1.7,
          }}>
            Certified by <strong style={{ color: 'var(--text)' }}>IT Education Center, Pune</strong> — hands-on training
            in industry-standard web technologies.
          </p>
        </motion.div>

        {/* Cards — 3-column on desktop, stacked on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem',
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="card"
              style={{
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
            >
              {/* Coloured top band */}
              <div style={{
                height: 6,
                background: getGradient(cert.gradient),
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Icon area */}
              <div style={{
                background: getGradient(cert.gradient),
                padding: '36px 28px 28px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Subtle pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }} />

                {/* Emoji */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.4rem',
                  marginBottom: 14,
                  position: 'relative', zIndex: 1,
                }}>
                  {cert.emoji}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800, fontSize: '1.25rem',
                  color: '#fff', lineHeight: 1.2,
                  position: 'relative', zIndex: 1,
                }}>
                  {cert.title}
                </h3>

                {/* Certificate ribbon badge */}
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: 'rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: 50, padding: '4px 10px',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <FiAward style={{ color: '#fff', fontSize: '0.75rem' }} />
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.68rem', fontWeight: 700, color: '#fff',
                    letterSpacing: '0.5px',
                  }}>
                    CERTIFIED
                  </span>
                </div>
              </div>

              {/* Info area */}
              <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Issuer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FiMapPin style={{ color: '#6366f1', fontSize: '0.88rem', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.87rem', fontWeight: 600,
                    color: 'var(--text)',
                  }}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FiCalendar style={{ color: '#06b6d4', fontSize: '0.88rem', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.83rem', color: 'var(--text-2)',
                  }}>
                    Issued {cert.date}
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />

                {/* View Certificate link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.82rem', fontWeight: 600,
                    color: '#6366f1', textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                    marginTop: 'auto',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '10px' }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '6px' }}
                >
                  <FiExternalLink style={{ fontSize: '0.85rem' }} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '3rem', textAlign: 'center',
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 28px', borderRadius: 50,
            background: 'var(--glass)', border: '1px solid var(--border)',
          }}>
            <FiAward style={{ color: '#6366f1', fontSize: '1.1rem' }} />
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)',
            }}>
              All certifications issued by{' '}
              <strong style={{
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                IT Education Center, Pune
              </strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
