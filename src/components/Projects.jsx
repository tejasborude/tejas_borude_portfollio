import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const allTags = ['All', 'React', 'MERN', 'Frontend', 'WordPress']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter))

  return (
    <section id="projects" className="section-bg" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem', color: 'var(--text-2)',
            maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.7,
          }}>
            A selection of real-world projects demonstrating my technical skills and problem-solving ability.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 10, flexWrap: 'wrap', marginBottom: '3rem',
          }}
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                padding: '9px 24px', borderRadius: 50,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', outline: 'none',
                transition: 'all 0.3s ease',
                background: filter === tag
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                  : 'var(--glass)',
                color: filter === tag ? '#fff' : 'var(--text-2)',
                border: filter === tag ? 'none' : '1px solid var(--border)',
                boxShadow: filter === tag ? '0 4px 20px rgba(99,102,241,0.35)' : 'none',
              }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.8rem',
        }}>
          <AnimatePresence mode="popLayout">
            {visible.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Project visual */}
                <div style={{
                  position: 'relative', height: 200, overflow: 'hidden',
                  background: `linear-gradient(135deg, var(--grad-from, #6366f1), var(--grad-to, #06b6d4))`,
                  '--grad-from': '#6366f1', '--grad-to': '#06b6d4',
                }}>
                  {/* Gradient background based on project */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(135deg, ${gradientFrom(proj.gradient)})`,
                    opacity: 0.95,
                  }} />

                  {/* Pattern overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }} />

                  {/* Emoji icon */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '4rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  }}>
                    {proj.emoji}
                  </div>

                  {/* Tags */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    display: 'flex', gap: 6,
                  }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 50,
                        background: 'rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(8px)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.7rem', fontWeight: 600, color: '#fff',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hover overlay with links */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 16, opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                    className="project-overlay"
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0 }}
                  >
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '10px 20px', borderRadius: 50,
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: '#fff', fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.82rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '10px 20px', borderRadius: 50,
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: '#fff', fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.82rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                    >
                      <FiGithub /> GitHub
                    </a>
                  </div>

                  {/* Make the whole image area trigger hover */}
                  <div
                    style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
                    onMouseEnter={e => {
                      e.currentTarget.previousSibling.style.opacity = 1
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.previousSibling.style.opacity = 0
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)',
                    marginBottom: 8,
                  }}>
                    {proj.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.85rem', color: 'var(--text-2)',
                    lineHeight: 1.65, marginBottom: 16, flex: 1,
                  }}>
                    {proj.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {proj.tech.slice(0, 4).map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 50,
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.7rem', fontWeight: 600, color: '#6366f1',
                      }}>
                        {t}
                      </span>
                    ))}
                    {proj.tech.length > 4 && (
                      <span style={{
                        padding: '3px 10px', borderRadius: 50,
                        background: 'rgba(99,102,241,0.05)',
                        border: '1px solid var(--border)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-3)',
                      }}>
                        +{proj.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: 6, padding: '9px', borderRadius: 10,
                        background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                        color: '#fff', fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.8rem', fontWeight: 600,
                        textDecoration: 'none', transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: 6, padding: '9px', borderRadius: 10,
                        background: 'var(--glass)', border: '1px solid var(--border)',
                        color: 'var(--text-2)', fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.8rem', fontWeight: 600,
                        textDecoration: 'none', transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                        e.currentTarget.style.color = '#6366f1'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.color = 'var(--text-2)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a
            href="https://github.com/tejasborude"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function gradientFrom(cls) {
  const map = {
    'from-violet-600 to-indigo-600': '#7c3aed, #4f46e5',
    'from-cyan-500 to-blue-600': '#06b6d4, #2563eb',
    'from-orange-500 to-red-500': '#f97316, #ef4444',
    'from-blue-500 to-teal-500': '#3b82f6, #14b8a6',
    'from-emerald-500 to-green-600': '#10b981, #16a34a',
    'from-pink-500 to-rose-500': '#ec4899, #f43f5e',
  }
  return map[cls] || '#6366f1, #06b6d4'
}
