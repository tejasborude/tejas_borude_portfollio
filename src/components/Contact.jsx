import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiLinkedin, FiTwitter, FiInstagram,
  FiCheckCircle,
} from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const socials = [
  { icon: <FiGithub />, href: personal.github, label: 'GitHub', color: '#24292e' },
  { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn', color: '#0077b5' },
  { icon: <FiTwitter />, href: personal.twitter, label: 'Twitter', color: '#1da1f2' },
  { icon: <FiInstagram />, href: personal.instagram, label: 'Instagram', color: '#e1306c' },
  { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email', color: '#6366f1' },
]

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FiMail />, label: 'Email 2', value: personal.email2, href: `mailto:${personal.email2}` },
  { icon: <FiPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <FiMapPin />, label: 'Location', value: personal.location, href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1800)
  }

  const Field = ({ name, label, type = 'text', rows }) => (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block', fontFamily: 'Poppins, sans-serif',
        fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-2)',
        marginBottom: 6,
      }}>
        {label} <span style={{ color: '#ef4444' }}>*</span>
      </label>
      {rows ? (
        <textarea
          rows={rows}
          value={form[name]}
          onChange={e => setForm({ ...form, [name]: e.target.value })}
          placeholder={`Your ${label.toLowerCase()}...`}
          style={{
            width: '100%', padding: '12px 16px', borderRadius: 12,
            background: 'var(--glass)', border: `1px solid ${errors[name] ? '#ef4444' : 'var(--border)'}`,
            color: 'var(--text)', fontFamily: 'Poppins, sans-serif',
            fontSize: '0.9rem', resize: 'vertical', outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }}
          onBlur={e => { e.target.style.borderColor = errors[name] ? '#ef4444' : 'var(--border)' }}
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={e => setForm({ ...form, [name]: e.target.value })}
          placeholder={`Your ${label.toLowerCase()}...`}
          style={{
            width: '100%', padding: '12px 16px', borderRadius: 12,
            background: 'var(--glass)', border: `1px solid ${errors[name] ? '#ef4444' : 'var(--border)'}`,
            color: 'var(--text)', fontFamily: 'Poppins, sans-serif',
            fontSize: '0.9rem', outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }}
          onBlur={e => { e.target.style.borderColor = errors[name] ? '#ef4444' : 'var(--border)' }}
        />
      )}
      {errors[name] && (
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#ef4444', marginTop: 4 }}>
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <section id="contact" className="section-bg" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem', color: 'var(--text-2)',
            maxWidth: 540, margin: '1rem auto 0', lineHeight: 1.7,
          }}>
            Have a project in mind or looking to hire? I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)',
              marginBottom: '0.7rem',
            }}>
              Contact Information
            </h3>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.9rem', color: 'var(--text-2)',
              lineHeight: 1.7, marginBottom: '2rem',
            }}>
              Feel free to reach out via any of the channels below. I typically respond within 24 hours.
            </p>

            {/* Contact cards */}
            {contactInfo.map(c => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 18px', borderRadius: 14, marginBottom: 12,
                  background: 'var(--glass)', border: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'
                  e.currentTarget.style.background = 'rgba(99,102,241,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--glass)'
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(99,102,241,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6366f1', fontSize: '1.1rem',
                }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--text-3)', textTransform: 'uppercase',
                    letterSpacing: '0.8px', marginBottom: 2,
                  }}>
                    {c.label}
                  </p>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)',
                  }}>
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.82rem', fontWeight: 600,
                color: 'var(--text-3)', textTransform: 'uppercase',
                letterSpacing: '1px', marginBottom: '1rem',
              }}>
                Follow Me
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: 'var(--glass)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-2)', fontSize: '1.1rem',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = s.color
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.borderColor = s.color
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
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card"
            style={{ padding: '36px 32px' }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '20px 0' }}
              >
                <FiCheckCircle style={{ fontSize: '3.5rem', color: '#22c55e', marginBottom: 16 }} />
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)',
                  marginBottom: 8,
                }}>
                  Message Sent!
                </h3>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row-2">
                  <Field name="name" label="Your Name" />
                  <Field name="email" label="Email Address" type="email" />
                </div>
                <Field name="subject" label="Subject" />
                <Field name="message" label="Message" rows={5} />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={sending}
                  style={{
                    width: '100%', justifyContent: 'center', marginTop: 4,
                    opacity: sending ? 0.8 : 1,
                    cursor: sending ? 'not-allowed' : 'pointer',
                  }}
                >
                  {sending ? (
                    <>
                      <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', fontSize: '1rem' }}>⏳</span>
                      Sending...
                    </>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
