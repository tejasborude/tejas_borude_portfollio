import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiMapPin, FiMail, FiPhone, FiAward } from 'react-icons/fi'
import { personal, stats } from '../data/portfolioData'

const fadeIn = (dir = 'up', delay = 0) => ({
  initial: { opacity: 0, y: dir === 'up' ? 40 : 0, x: dir === 'left' ? -40 : dir === 'right' ? 40 : 0 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

const highlights = [
  { icon: '⚛️', text: '1.5+ years of professional web development experience' },
  { icon: '🚀', text: 'Proficient in React.js, Node.js, MongoDB & Express.js' },
  { icon: '📱', text: 'Expert in responsive, mobile-first UI design' },
  { icon: '🔧', text: 'Strong grasp of Git, Agile workflows & CI/CD pipelines' },
  { icon: '🎯', text: 'Committed to writing clean, scalable, maintainable code' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <section id="about" className="section-bg-alt" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div {...fadeIn('up', 0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who Am <span className="gradient-text">I?</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* ── Left: Avatar ── */}
          <motion.div {...fadeIn('left', 0.1)} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            {/*
              Outer wrapper: full-width up to 300px, overflow hidden
              so decorative rings are clipped and never escape the column.
            */}
            <div style={{ position: 'relative', width: '100%', maxWidth: 420, overflow: 'hidden', borderRadius: 28 }}>

              {/* Decorative rings — contained inside overflow:hidden wrapper */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(6,182,212,0.18))',
                animation: 'spin 15s linear infinite',
              }} />
              <div style={{
                position: 'absolute', inset: 4,
                borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
                border: '2px dashed rgba(99,102,241,0.25)',
                animation: 'spin 20s linear infinite reverse',
              }} />

              {/* Main avatar card */}
              <div className="glass" style={{
                position: 'relative', zIndex: 1,
                borderRadius: 24, padding: '44px 36px',
                textAlign: 'center', overflow: 'hidden',
              }}>
                {/* "Open to Work" badge — inside card, no absolute overflow */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 14px', borderRadius: 50, marginBottom: 18,
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                }}>
                  <FiAward style={{ color: '#fff', fontSize: '0.8rem' }} />
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                  }}>
                    Open to Work
                  </span>
                </div>

                {/* Avatar circle */}
                <div style={{
                  width: 160, height: 160, borderRadius: '50%',
                  margin: '0 auto 22px',
                  boxShadow: '0 0 50px rgba(99,102,241,0.5)',
                  overflow: 'hidden',
                }}>
                  <img src="/tejas-img.jpg" alt="Tejas Borude" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700, fontSize: '1.5rem', color: 'var(--text)', marginBottom: 6,
                }}>
                  {personal.name}
                </h3>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem', color: 'var(--text-2)', marginBottom: 24,
                }}>
                  Frontend & MERN Stack Developer
                </p>

                {/* Contact pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {[
                    { icon: <FiMapPin />, text: personal.location },
                    { icon: <FiMail />, text: personal.email },
                    { icon: <FiMail />, text: personal.email2 },
                    { icon: <FiPhone />, text: personal.phone },
                  ].map(item => (
                    <div key={item.text} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '10px 16px', borderRadius: 12,
                      background: 'rgba(99,102,241,0.06)',
                      border: '1px solid var(--border)',
                    }}>
                      <span style={{ color: '#6366f1', fontSize: '0.88rem', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.875rem', color: 'var(--text-2)',
                        textAlign: 'left', wordBreak: 'break-all',
                        lineHeight: 1.4,
                      }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div {...fadeIn('right', 0.2)}>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700, fontSize: '1.6rem',
              color: 'var(--text)', marginBottom: '1rem',
            }}>
              Crafting Digital Experiences with{' '}
              <span className="gradient-text">Passion & Precision</span>
            </h3>

            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.96rem', lineHeight: 1.8,
              color: 'var(--text-2)', marginBottom: '1rem',
            }}>
              {personal.bio}
            </p>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.96rem', lineHeight: 1.8,
              color: 'var(--text-2)', marginBottom: '1.8rem',
            }}>
              {personal.bio2}
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 14px', borderRadius: 10,
                    background: 'var(--glass)', border: '1px solid var(--border)',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{h.icon}</span>
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.875rem', color: 'var(--text-2)',
                  }}>
                    {h.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Download resume */}
            <a href={personal.resumeUrl} download className="btn-primary" style={{ textDecoration: 'none' }}>
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <div ref={ref} style={{ marginTop: '5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card"
                style={{ padding: '28px 20px', textAlign: 'center' }}
              >
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800, fontSize: '2.4rem',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1, marginBottom: 6,
                }}>
                  {inView ? (
                    <CountUp
                      end={s.value}
                      duration={2.5}
                      decimals={s.decimals}
                      suffix={s.suffix}
                    />
                  ) : (
                    `${s.value}${s.suffix}`
                  )}
                </p>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.85rem', fontWeight: 600,
                  color: 'var(--text-2)',
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
