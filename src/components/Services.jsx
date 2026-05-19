import { motion } from 'framer-motion'
import { services } from '../data/portfolioData'

function gradientFromClass(cls) {
  const map = {
    'from-indigo-500 to-purple-600': 'linear-gradient(135deg, #6366f1, #9333ea)',
    'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #2563eb)',
    'from-blue-500 to-teal-500': 'linear-gradient(135deg, #3b82f6, #14b8a6)',
    'from-orange-500 to-pink-500': 'linear-gradient(135deg, #f97316, #ec4899)',
    'from-emerald-500 to-green-600': 'linear-gradient(135deg, #10b981, #16a34a)',
    'from-rose-500 to-red-600': 'linear-gradient(135deg, #f43f5e, #dc2626)',
  }
  return map[cls] || 'linear-gradient(135deg, #6366f1, #06b6d4)'
}

export default function Services() {
  return (
    <section id="services" className="section-bg-alt" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services I <span className="gradient-text">Offer</span></h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem', color: 'var(--text-2)',
            maxWidth: 540, margin: '1rem auto 0', lineHeight: 1.7,
          }}>
            From pixel-perfect frontends to scalable backends — I bring your vision to life with modern tech.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '1.8rem',
        }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card"
              style={{ padding: '30px 26px', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(99,102,241,0.2)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Glow blob on hover */}
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 120, height: 120, borderRadius: '50%',
                background: gradientFromClass(svc.gradient),
                opacity: 0.08, filter: 'blur(30px)',
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: gradientFromClass(svc.gradient),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem', marginBottom: 18,
                boxShadow: `0 8px 24px ${gradientFromClass(svc.gradient).includes('#6366f1') ? 'rgba(99,102,241,0.35)' : 'rgba(6,182,212,0.35)'}`,
              }}>
                {svc.icon}
              </div>

              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)',
                marginBottom: 10,
              }}>
                {svc.title}
              </h3>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.875rem', color: 'var(--text-2)',
                lineHeight: 1.7, marginBottom: 18,
              }}>
                {svc.description}
              </p>

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {svc.skills.map(sk => (
                  <span key={sk} style={{
                    padding: '3px 11px', borderRadius: 50,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.15)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.7rem', fontWeight: 600, color: '#6366f1',
                  }}>
                    {sk}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 3,
                background: gradientFromClass(svc.gradient),
                opacity: 0.6,
                borderRadius: '0 0 20px 20px',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
