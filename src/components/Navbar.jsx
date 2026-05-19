import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeContext'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

/* Breakpoints (px) */
const BP_SM = 640   // show logo text
const BP_LG = 1024  // show desktop nav, hide hamburger

function useBreakpoints() {
  const getW = () => (typeof window !== 'undefined' ? window.innerWidth : 1280)
  const [w, setW] = useState(getW)
  useEffect(() => {
    const handler = () => setW(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return { isDesktop: w >= BP_LG, showName: w >= BP_SM }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { isDesktop, showName } = useBreakpoints()

  /* Close mobile menu when switching to desktop */
  useEffect(() => { if (isDesktop) setOpen(false) }, [isDesktop])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = links.map(l => l.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── Shared style blocks ── */
  const navbarStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: scrolled ? '8px 0' : '16px 0',
    background: scrolled ? 'var(--glass)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    boxShadow: scrolled ? '0 4px 30px var(--shadow)' : 'none',
    transition: 'padding 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',
  }

  const innerStyle = {
    maxWidth: 1200, margin: '0 auto',
    padding: '0 20px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 16,
  }

  const iconBtnStyle = {
    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
    background: 'var(--glass)', border: '1px solid var(--border)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--text)', fontSize: '1.1rem', cursor: 'pointer',
    outline: 'none',
  }

  return (
    <>
      {/* ═══════════════ MAIN NAV BAR ═══════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={navbarStyle}
      >
        <div style={innerStyle}>

          {/* ── Logo ── */}
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); go('#home') }}
            whileHover={{ scale: 1.04 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '0.9rem', color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 0 20px rgba(99,102,241,0.4)',
            }}>
              TB
            </div>

            {/* Name — hide below 640 px */}
            {showName && (
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700, fontSize: '1rem',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                whiteSpace: 'nowrap',
              }}>
                Tejas Borude
              </span>
            )}
          </motion.a>

          {/* ── Desktop nav links (≥ 1024 px) ── */}
          {isDesktop && (
            <ul style={{
              display: 'flex', alignItems: 'center', gap: 2,
              listStyle: 'none', margin: 0, padding: 0,
            }}>
              {links.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    style={{
                      background: 'none', border: 'none', outline: 'none',
                      cursor: 'pointer', padding: '7px 13px', borderRadius: 8,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.87rem',
                      fontWeight: active === link.href.slice(1) ? 700 : 500,
                      color: active === link.href.slice(1) ? '#6366f1' : 'var(--text-2)',
                      position: 'relative', transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = '#6366f1' }}
                    onMouseLeave={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = 'var(--text-2)' }}
                  >
                    {link.label}
                    {active === link.href.slice(1) && (
                      <motion.span
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute', bottom: 0, left: '20%', right: '20%',
                          height: 2, borderRadius: 1,
                          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* ── Right actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

            {/* Theme toggle — always visible */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={iconBtnStyle}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </motion.button>

            {/* "Hire Me" — tablet + desktop (≥ 640 px) */}
            {showName && (
              <motion.a
                href="#contact"
                onClick={e => { e.preventDefault(); go('#contact') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '8px 20px', borderRadius: 50,
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  color: '#fff', fontWeight: 600, fontSize: '0.84rem',
                  fontFamily: 'Poppins, sans-serif', textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(99,102,241,0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                Hire Me
              </motion.a>
            )}

            {/* Hamburger — mobile & tablet (< 1024 px) */}
            {!isDesktop && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(prev => !prev)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                style={{ ...iconBtnStyle, borderRadius: 10 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? 'x' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {open ? <FiX /> : <FiMenu />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════ MOBILE / TABLET DROPDOWN ═══════════════ */}
      <AnimatePresence>
        {open && !isDesktop && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 998,
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(2px)',
              }}
            />

            {/* Dropdown panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: scrolled ? 64 : 76,
                left: 12, right: 12,
                zIndex: 999,
                background: 'var(--glass)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '12px 8px 16px',
                boxShadow: '0 24px 64px var(--shadow)',
                overflow: 'hidden',
              }}
            >
              {/* Nav links */}
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(link.href)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    width: '100%', textAlign: 'left',
                    padding: '13px 18px', borderRadius: 12,
                    background: active === link.href.slice(1) ? 'rgba(99,102,241,0.12)' : 'transparent',
                    border: 'none', outline: 'none', cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.96rem',
                    fontWeight: active === link.href.slice(1) ? 700 : 500,
                    color: active === link.href.slice(1) ? '#6366f1' : 'var(--text)',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (active !== link.href.slice(1)) {
                      e.currentTarget.style.background = 'rgba(99,102,241,0.06)'
                      e.currentTarget.style.color = '#6366f1'
                    }
                  }}
                  onMouseLeave={e => {
                    if (active !== link.href.slice(1)) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text)'
                    }
                  }}
                >
                  {/* Active dot */}
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                    background: active === link.href.slice(1)
                      ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                      : 'var(--border)',
                    transition: 'background 0.2s ease',
                  }} />
                  {link.label}
                </motion.button>
              ))}

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', margin: '8px 12px' }} />

              {/* Hire Me — only on pure mobile (< 640) where it's hidden in the navbar */}
              {!showName && (
                <div style={{ padding: '4px 8px 0' }}>
                  <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); go('#contact') }}
                    style={{
                      display: 'block', textAlign: 'center',
                      padding: '12px', borderRadius: 12,
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                      color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                      fontFamily: 'Poppins, sans-serif', textDecoration: 'none',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Hire Me
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
