import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: '#0d0d1a',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }}
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            width: 90, height: 90, borderRadius: 22,
            boxShadow: '0 0 60px rgba(99,102,241,0.6)',
            overflow: 'hidden',
          }}
        >
          <img src="/tejas-img.jpg" alt="Tejas Borude" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.1rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            letterSpacing: '0.15em',
          }}>
            TEJAS BORUDE
          </p>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.78rem', color: '#5555a0', letterSpacing: '0.1em',
            marginTop: '4px',
          }}>
            Frontend & MERN Stack Developer
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          style={{
            width: 200, height: 3, borderRadius: 2,
            background: 'rgba(255,255,255,0.08)', overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
              borderRadius: 2,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
