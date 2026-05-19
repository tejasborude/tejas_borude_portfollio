import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiDownload, FiArrowRight, FiCode, FiArrowDown,
} from 'react-icons/fi'
import ParticleBackground from './ParticleBackground'
import { personal } from '../data/portfolioData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

const socials = [
  { icon: <FiGithub />,   href: personal.github,               label: 'GitHub' },
  { icon: <FiLinkedin />, href: personal.linkedin,             label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: personal.twitter,              label: 'Twitter' },
  { icon: <FiMail />,     href: `mailto:${personal.email}`,    label: 'Email' },
]

const techBadges = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript']

/* ── breakpoint hook ── */
function useWinW() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

export default function Hero() {
  const winW    = useWinW()
  const showCard = winW >= 768
  return (
    <section
      id="home"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflowX: 'hidden',
        background: 'var(--bg)',
      }}
    >
      <ParticleBackground />

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '3%',
        width: 340, height: 340, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '110px 24px 80px',
        position: 'relative', zIndex: 2,
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: showCard ? '1fr 1fr' : '1fr',
          gap: '3rem',
          alignItems: 'center',
          justifyItems: 'center',
        }}>

          {/* ── Left: Text ── */}
          <div style={{ width: '100%', maxWidth: 560 }}>
            {/* Greeting badge */}
            <motion.div {...fadeUp(0.1)}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 18px', borderRadius: 50,
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.82rem', fontWeight: 600,
                color: '#6366f1', letterSpacing: '1px',
                marginBottom: '1.2rem',
              }}>
                <span style={{ fontSize: '0.9rem' }}>👋</span>
                {personal.greeting}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                fontWeight: 900, lineHeight: 1.1,
                marginBottom: '0.6rem',
              }}
            >
              <span style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 60%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {personal.name}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              {...fadeUp(0.3)}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.45rem)',
                fontWeight: 600, color: 'var(--text-2)',
                marginBottom: '1.4rem',
                display: 'flex', alignItems: 'center', gap: 8,
                flexWrap: 'wrap', minHeight: 40,
              }}
            >
              <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>I'm a</span>
              <span style={{
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                <Typewriter
                  options={{
                    strings: personal.roles,
                    autoStart: true,
                    loop: true,
                    delay: 55,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.4)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(0.88rem, 2vw, 0.97rem)', lineHeight: 1.75,
                color: 'var(--text-2)', marginBottom: '1.6rem',
              }}
            >
              {personal.bio}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              {...fadeUp(0.45)}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.8rem' }}
            >
              {techBadges.map(t => (
                <span key={t} style={{
                  padding: '4px 13px', borderRadius: 50,
                  background: 'var(--glass)', border: '1px solid var(--border)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.76rem', fontWeight: 500, color: 'var(--text-2)',
                }}>
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.5)}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '2rem' }}
            >
              <a href={personal.resumeUrl} download className="btn-primary" style={{ textDecoration: 'none' }}>
                <FiDownload /> Download Resume
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Projects <FiArrowRight />
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div {...fadeUp(0.6)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'var(--glass)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-2)', fontSize: '1.1rem', textDecoration: 'none',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#6366f1'
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating Card — only on md+ ── */}
          {showCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, type: 'spring', stiffness: 80 }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
              {/* Card container — capped to avoid overflow */}
              <div style={{ position: 'relative', width: '100%', maxWidth: 320 }}>

                {/* Rotating glow ring — clipped to parent */}
                <div style={{
                  position: 'absolute', inset: -8,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #a78bfa, #6366f1)',
                  animation: 'spin 8s linear infinite',
                  opacity: 0.55, filter: 'blur(10px)',
                  zIndex: 0,
                }} />

                {/* Main glass card */}
                <div className="glass" style={{
                  position: 'relative', zIndex: 1,
                  borderRadius: 28, padding: '32px 24px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden', textAlign: 'center',
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 100, height: 100, borderRadius: '50%',
                    marginBottom: 16,
                    boxShadow: '0 0 40px rgba(99,102,241,0.5)',
                    animation: 'glow 3s ease-in-out infinite',
                    overflow: 'hidden',
                  }}>
                    <img src="/tejas-img.jpg" alt="Tejas Borude" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)', marginBottom: 4,
                  }}>
                    Tejas Borude
                  </p>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: 20,
                  }}>
                    Frontend & MERN Developer
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                    {[['20+', 'Projects'], ['1.5+', 'Years'], ['15+', 'Clients']].map(([val, lab]) => (
                      <div key={lab}>
                        <p style={{
                          fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem',
                          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                          {val}
                        </p>
                        <p style={{
                          fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', color: 'var(--text-3)',
                        }}>
                          {lab}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Status badge */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '7px 16px', borderRadius: 50,
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.25)',
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                      animation: 'pulse 2s infinite',
                    }} />
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.76rem', fontWeight: 600, color: '#22c55e',
                    }}>
                      Available for hire
                    </span>
                  </div>

                  {/* Inline floating chips (no absolute overflow) */}
                  <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '5px 12px', borderRadius: 8,
                      background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                      fontFamily: 'Poppins, sans-serif', fontSize: '0.73rem', fontWeight: 600, color: '#6366f1',
                    }}>
                      <FiCode style={{ fontSize: '0.75rem' }} /> 50K+ Lines
                    </span>
                    <span style={{
                      padding: '5px 12px', borderRadius: 8,
                      background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)',
                      fontFamily: 'Poppins, sans-serif', fontSize: '0.73rem', fontWeight: 600, color: '#06b6d4',
                    }}>
                      ⚛️ React Expert
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          cursor: 'pointer', zIndex: 2,
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: 'Poppins, sans-serif', fontSize: '0.68rem',
          color: 'var(--text-3)', letterSpacing: '1.5px', textTransform: 'uppercase',
        }}>
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#6366f1', fontSize: '1.2rem' }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  )
}
