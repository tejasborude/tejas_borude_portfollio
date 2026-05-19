import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-bg-alt" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 16, top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 60%, transparent 100%)',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              style={{ position: 'relative', marginBottom: i < experiences.length - 1 ? '2.5rem' : 0 }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -33, top: 20,
                width: 18, height: 18, borderRadius: '50%',
                background: exp.current
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                  : exp.type === 'education'
                    ? 'linear-gradient(135deg, #06b6d4, #0891b2)'
                    : 'rgba(99,102,241,0.4)',
                border: `2px solid ${exp.current ? '#6366f1' : 'var(--border)'}`,
                boxShadow: exp.current ? '0 0 14px rgba(99,102,241,0.6)' : 'none',
                zIndex: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {exp.current && (
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#fff', animation: 'pulse 2s infinite',
                  }} />
                )}
              </div>

              {/* Card */}
              <div className="card" style={{ padding: '24px 24px 20px', marginLeft: 8 }}>
                {/* Header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: 10,
                  marginBottom: 12,
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: exp.type === 'education' ? '#06b6d4' : '#6366f1', fontSize: '1rem' }}>
                        {exp.type === 'education' ? <FiBook /> : <FiBriefcase />}
                      </span>
                      <h3 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)',
                      }}>
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span style={{
                          padding: '2px 10px', borderRadius: 50,
                          background: 'rgba(34,197,94,0.12)',
                          border: '1px solid rgba(34,197,94,0.25)',
                          fontSize: '0.7rem', fontWeight: 600, color: '#22c55e',
                          fontFamily: 'Poppins, sans-serif',
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600, fontSize: '0.9rem',
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      justifyContent: 'flex-end', marginBottom: 4,
                    }}>
                      <FiCalendar style={{ color: 'var(--text-3)', fontSize: '0.8rem' }} />
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-2)',
                      }}>
                        {exp.duration}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}>
                      <FiMapPin style={{ color: 'var(--text-3)', fontSize: '0.8rem' }} />
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.78rem', color: 'var(--text-3)',
                      }}>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: exp.tech.length ? 14 : 0 }}>
                  {exp.description.map((d, di) => (
                    <li key={di} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      marginBottom: 8,
                    }}>
                      <FiCheck style={{ color: '#6366f1', flexShrink: 0, marginTop: 3, fontSize: '0.85rem' }} />
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65,
                      }}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                {exp.tech.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {exp.tech.map(t => (
                      <span key={t} style={{
                        padding: '3px 12px', borderRadius: 50,
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.72rem', fontWeight: 600, color: '#6366f1',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
