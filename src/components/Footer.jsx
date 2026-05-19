import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
  { icon: <FiTwitter />, href: personal.twitter, label: 'Twitter' },
  { icon: <FiInstagram />, href: personal.instagram, label: 'Instagram' },
  { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  const handleNav = (href) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border)',
      paddingTop: '4rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                overflow: 'hidden',
              }}>
                <img src="/tejas-img.jpg" alt="Tejas Borude" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)',
                }}>
                  Tejas Borude
                </p>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.76rem', color: 'var(--text-3)',
                }}>
                  Frontend & MERN Developer
                </p>
              </div>
            </div>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.875rem', color: 'var(--text-2)',
              lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: 280,
            }}>
              {personal.tagline} Building beautiful, performant web experiences that make a difference.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: 'var(--glass)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-2)', fontSize: '1rem',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.15)'
                    e.currentTarget.style.color = '#6366f1'
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--glass)'
                    e.currentTarget.style.color = 'var(--text-2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)',
              marginBottom: '1rem', textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map(link => (
                <li key={link.href} style={{ marginBottom: 10 }}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem', color: 'var(--text-2)',
                      padding: 0, textAlign: 'left',
                      transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#6366f1' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                  >
                    <span style={{ color: '#6366f1', fontSize: '0.6rem' }}>▶</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)',
              marginBottom: '1rem', textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Frontend Development', 'MERN Stack Apps', 'WordPress Development', 'REST API Development'].map(svc => (
                <li key={svc} style={{ marginBottom: 10 }}>
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.875rem', color: 'var(--text-2)',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ color: '#06b6d4', fontSize: '0.6rem' }}>▶</span>
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)',
              marginBottom: '1rem', textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <FiMail />, text: personal.email, href: `mailto:${personal.email}` },
                { icon: <FiMail />, text: personal.email2, href: `mailto:${personal.email2}` },
                { icon: <FiPhone />, text: personal.phone, href: `tel:${personal.phone}` },
                { icon: <FiMapPin />, text: personal.location, href: '#' },
              ].map(item => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelectorAll('span, svg').forEach(el => {
                      el.style.color = '#6366f1'
                    })
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelectorAll('span, svg').forEach(el => {
                      el.style.color = ''
                    })
                  }}
                >
                  <span style={{ color: '#6366f1', fontSize: '0.95rem', flexShrink: 0, marginTop: 2 }}>
                    {item.icon}
                  </span>
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.875rem', color: 'var(--text-2)',
                    lineHeight: 1.5, wordBreak: 'break-all',
                  }}>
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12, paddingBottom: '2rem',
        }}>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.82rem', color: 'var(--text-3)',
          }}>
            © {new Date().getFullYear()} <strong style={{ color: 'var(--text-2)' }}>Tejas Borude</strong>. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.82rem', color: 'var(--text-3)',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            Crafted with{' '}
            <FiHeart style={{ color: '#ef4444', fontSize: '0.85rem' }} />{' '}
            using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
