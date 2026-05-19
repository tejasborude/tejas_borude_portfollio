import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../data/portfolioData'

function SkillBar({ name, level, color, inView }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            background: color, flexShrink: 0,
            boxShadow: `0 0 8px ${color}80`,
          }} />
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.88rem', fontWeight: 600,
            color: 'var(--text)',
          }}>
            {name}
          </span>
        </div>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.82rem', fontWeight: 700,
          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          {level}%
        </span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const category = skillCategories.find(c => c.id === active)

  return (
    <section id="skills" className="section-bg" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem', color: 'var(--text-2)',
            maxWidth: 540, margin: '1rem auto 0',
            lineHeight: 1.7,
          }}>
            A comprehensive toolkit refined through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 10, marginBottom: '3rem', flexWrap: 'wrap',
          }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: '10px 28px', borderRadius: 50,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.88rem', fontWeight: 600,
                cursor: 'pointer', outline: 'none',
                transition: 'all 0.3s ease',
                background: active === cat.id
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                  : 'var(--glass)',
                color: active === cat.id ? '#fff' : 'var(--text-2)',
                border: active === cat.id ? 'none' : '1px solid var(--border)',
                boxShadow: active === cat.id ? '0 4px 20px rgba(99,102,241,0.35)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {/* Left col */}
              <div className="card" style={{ padding: '28px 24px' }}>
                {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map(s => (
                  <SkillBar key={s.name} {...s} inView={inView} />
                ))}
              </div>
              {/* Right col */}
              <div className="card" style={{ padding: '28px 24px' }}>
                {category.skills.slice(Math.ceil(category.skills.length / 2)).map(s => (
                  <SkillBar key={s.name} {...s} inView={inView} />
                ))}
                {/* Filler when odd */}
                {category.skills.length % 2 !== 0 && (
                  <div style={{ padding: '14px', textAlign: 'center' }}>
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.8rem', color: 'var(--text-3)',
                      fontStyle: 'italic',
                    }}>
                      + Continuously learning more...
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tech icons row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: '3.5rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.82rem', color: 'var(--text-3)',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Technologies I Work With
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular', 'jQuery', 'Bootstrap 5',
              'Node.js', 'Express.js', 'MongoDB', 'WordPress', 'Git', 'GitHub', 'VS Code', 'Postman'].map(tech => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -3 }}
                style={{
                  padding: '8px 18px', borderRadius: 50,
                  background: 'var(--glass)', border: '1px solid var(--border)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.82rem', fontWeight: 500,
                  color: 'var(--text-2)',
                  cursor: 'default', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                  e.currentTarget.style.color = '#6366f1'
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-2)'
                  e.currentTarget.style.background = 'var(--glass)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
