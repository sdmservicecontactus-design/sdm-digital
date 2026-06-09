'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px',
      background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '70px'
      }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #a855f7, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: '700', color: 'white'
          }}>
            S
          </div>
          <span style={{ fontWeight: '700', fontSize: '18px', color: 'white' }}>
            SDM <span style={{
              background: 'linear-gradient(90deg, #a855f7, #6366f1)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Digital</span>
          </span>
        </a>

        {/* Links escritorio */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          className="desktop-nav">
          {links.map((link, i) => (
            <a key={i} href={link.href} style={{
              color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              fontSize: '14px', fontWeight: '500', transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" style={{
            padding: '10px 22px', borderRadius: '999px', fontSize: '14px',
            fontWeight: '600', color: 'white', textDecoration: 'none',
            background: 'linear-gradient(90deg, #a855f7, #6366f1)',
          }}>
            Solicitar presupuesto
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'white', cursor: 'pointer', fontSize: '24px', padding: '4px'
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 24px 32px'
        }}>
          {links.map((link, i) => (
            <a key={i} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                fontSize: '16px', fontWeight: '500'
              }}>
              {link.label}
            </a>
          ))}
          <a href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', textAlign: 'center', marginTop: '20px',
              padding: '14px', borderRadius: '12px', fontWeight: '600',
              color: 'white', textDecoration: 'none',
              background: 'linear-gradient(90deg, #a855f7, #6366f1)',
            }}>
            Solicitar presupuesto
          </a>
        </div>
      )}
    </nav>
  )
}