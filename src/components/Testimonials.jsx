import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../data/portfolioData'

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#fbbf24', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  )
}

function gradientFromClass(cls) {
  const map = {
    'from-indigo-500 to-purple-600': 'linear-gradient(135deg, #6366f1, #9333ea)',
    'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #2563eb)',
    'from-emerald-500 to-green-600': 'linear-gradient(135deg, #10b981, #16a34a)',
  }
  return map[cls] || 'linear-gradient(135deg, #6366f1, #06b6d4)'
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDir(1)
      setIdx(prev => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const go = (direction) => {
    setDir(direction)
    setIdx(prev => (prev + direction + testimonials.length) % testimonials.length)
    startTimer()
  }

  const t = testimonials[idx]

  return (
    <section id="testimonials" className="section-bg-alt" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Clients <span className="gradient-text">Say</span></h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial card */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="card"
              style={{ padding: '48px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Decorative quote marks */}
              <div style={{
                position: 'absolute', top: 20, left: 28,
                fontSize: '7rem', lineHeight: 1, fontFamily: 'Georgia, serif',
                color: 'rgba(99,102,241,0.08)', fontWeight: 900,
                userSelect: 'none',
              }}>
                "
              </div>
              <div style={{
                position: 'absolute', bottom: 10, right: 28,
                fontSize: '7rem', lineHeight: 1, fontFamily: 'Georgia, serif',
                color: 'rgba(99,102,241,0.08)', fontWeight: 900,
                userSelect: 'none', transform: 'rotate(180deg)',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <StarRating count={t.rating} />
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                lineHeight: 1.85, color: 'var(--text-2)',
                maxWidth: 680, margin: '0 auto 32px',
                fontStyle: 'italic',
                position: 'relative', zIndex: 1,
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: gradientFromClass(t.gradient),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700, fontSize: '1.1rem', color: '#fff',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                }}>
                  {t.initials}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700, fontSize: '1rem', color: 'var(--text)',
                  }}>
                    {t.name}
                  </p>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.82rem', color: 'var(--text-3)',
                  }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            style={{
              position: 'absolute', top: '50%', left: -20,
              transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--glass)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text)', cursor: 'pointer', fontSize: '1.1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#6366f1'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = '#6366f1'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--glass)'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => go(1)}
            style={{
              position: 'absolute', top: '50%', right: -20,
              transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--glass)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text)', cursor: 'pointer', fontSize: '1.1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#6366f1'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = '#6366f1'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--glass)'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24,
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); startTimer() }}
              style={{
                width: i === idx ? 24 : 8,
                height: 8, borderRadius: 4,
                background: i === idx
                  ? 'linear-gradient(90deg, #6366f1, #06b6d4)'
                  : 'var(--border)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
