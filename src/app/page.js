'use client'
import Navbar from './components/Navbar'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import emailjs from '@emailjs/browser'

export default function Home() {
  const heroRef = useRef(null)

  const [formData, setFormData] = useState({
  from_name: '', from_email: '', service: '', message: ''
})
const [sending, setSending] = useState(false)
const [sent, setSent] = useState(false)

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = async () => {
  if (!formData.from_name || !formData.from_email || !formData.message) return
  setSending(true)
  try {
    await emailjs.send(
      'service_7ii6o56',
      'template_0joqxkn',
      formData,
      'uM8b1lP-8E-aifvsC'
    )
    setSent(true)
    setFormData({ from_name: '', from_email: '', service: '', message: '' })
  } catch (error) {
    alert('Error al enviar. Inténtalo de nuevo.')
  } finally {
    setSending(false)
  }
}

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-tag', { opacity: 0, y: 30, duration: 0.6, delay: 0.2 })
      gsap.from('.hero-title', { opacity: 0, y: 50, duration: 0.8, delay: 0.4 })
      gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.6, delay: 0.7 })
      gsap.from('.hero-btns', { opacity: 0, y: 30, duration: 0.6, delay: 0.9 })
      gsap.from('.hero-blob', { opacity: 0, scale: 0.5, duration: 1.2, delay: 0.1, ease: 'power2.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={heroRef}>
      <Navbar />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Blobs de color de fondo */}
        <div className="hero-blob absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #a855f7, #6366f1)' }} />
        <div className="hero-blob absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #ec4899, #f97316)' }} />

        {/* Contenido */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">

          <div className="hero-tag inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-white/5 text-white/70">
            🛡️ Seguridad · Desarrollo · Mantenimiento
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Webs que{' '}
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', color: 'transparent'
            }}>
              convierten
            </span>
            <br />visitas en clientes
          </h1>

          {/* SDM Acronym breakdown */}
          <div className="hero-sub" style={{
            display: 'flex', justifyContent: 'center', gap: '16px',
            flexWrap: 'wrap', marginBottom: '24px'
          }}>
            {[
              { letter: 'S', word: 'Seguridad', color: '#a855f7', icon: '🛡️' },
              { letter: 'D', word: 'Desarrollo', color: '#6366f1', icon: '⚡' },
              { letter: 'M', word: 'Mantenimiento', color: '#ec4899', icon: '🔧' },
            ].map(({ letter, word, color, icon }) => (
              <div key={letter} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 20px', borderRadius: '14px',
                border: `1px solid ${color}40`,
                background: `${color}10`,
              }}>
                <span style={{
                  fontSize: '28px', fontWeight: '800',
                  background: `linear-gradient(135deg, ${color}, ${color}aa)`,
                  WebkitBackgroundClip: 'text', backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', color: 'transparent',
                  lineHeight: 1,
                }}>
                  {letter}
                </span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1 }}>SDM</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>
                    {icon} {word}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="hero-sub text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            En SDM Digital creamos páginas web profesionales, rápidas y atractivas
            para empresas que quieren destacar en internet.
          </p>

          <div className="hero-btns" style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center', marginTop: '10px' }}>
            <a href="#contacto"
              style={{
                padding: '16px 36px',
                borderRadius: '999px',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(90deg, #a855f7, #6366f1)',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'transform 0.2s',
              }}>
              Solicitar presupuesto
            </a>
            <a href="#servicios"
              style={{
                padding: '16px 36px',
                borderRadius: '999px',
                fontWeight: '600',
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                textDecoration: 'none',
                fontSize: '16px',
              }}>
              Ver servicios
            </a>
          </div>

        </div>
      </section>
              {/* SERVICIOS */}
<section id="servicios" style={{ padding: '100px 24px' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

    {/* Título */}
    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
      <div style={{
        display: 'inline-block', marginBottom: '16px', padding: '6px 20px',
        borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', fontSize: '14px'
      }}>
        ✦ Lo que ofrecemos
      </div>
      <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
        Nuestros <span style={{
          background: 'linear-gradient(90deg, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent'
        }}>servicios</span>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
        Todo lo que necesita tu negocio para triunfar en internet
      </p>
    </div>

    {/* Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

      {[
        {
          icon: '🎨',
          title: 'Diseño Web',
          desc: 'Diseños modernos, atractivos y adaptados a tu marca. Cada web es única y pensada para impactar a tus clientes.',
          color: '#a855f7'
        },
        {
          icon: '⚡',
          title: 'Desarrollo Web',
          desc: 'Webs rápidas, seguras y optimizadas. Construidas con las últimas tecnologías para garantizar el mejor rendimiento.',
          color: '#6366f1'
        },
        {
          icon: '📱',
          title: 'Diseño Responsive',
          desc: 'Tu web perfecta en cualquier dispositivo. Móvil, tablet o escritorio, siempre con la mejor experiencia.',
          color: '#ec4899'
        },
        {
          icon: '🛒',
          title: 'Tienda Online',
          desc: 'Vende tus productos las 24 horas. Creamos tu e-commerce completo con pasarela de pago incluida.',
          color: '#f97316'
        },
        {
          icon: '🔧',
          title: 'Mantenimiento',
          desc: 'Tu web siempre actualizada y segura. Nos encargamos de todo para que tú te centres en tu negocio.',
          color: '#22c55e'
        },
        {
          icon: '🚀',
          title: 'Optimización',
          desc: 'Webs ultrarrápidas que cargan en segundos. Mejoramos el rendimiento para reducir rebote y aumentar ventas.',
          color: '#06b6d4'
        },
      ].map((s, i) => (
        <div key={i} style={{
          padding: '32px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          transition: 'transform 0.2s, border-color 0.2s',
          cursor: 'default',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.borderColor = s.color + '60'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          }}
        >
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px', fontSize: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
            background: s.color + '20'
          }}>
            {s.icon}
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>{s.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', fontSize: '15px' }}>{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* PRECIOS */}
<section id="precios" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.02)' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

    {/* Título */}
    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
      <div style={{
        display: 'inline-block', marginBottom: '16px', padding: '6px 20px',
        borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', fontSize: '14px'
      }}>
        💰 Planes y precios
      </div>
      <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
        Precios <span style={{
          background: 'linear-gradient(90deg, #6366f1, #22c55e)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent'
        }}>transparentes</span>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
        Sin sorpresas. Elige el plan que mejor se adapte a tu negocio.
      </p>
    </div>

    {/* Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', alignItems: 'start' }}>
      {[
        {
          name: 'Básico',
          price: '150 – 250€',
          desc: 'Ideal para negocios locales que necesitan presencia online rápida y profesional.',
          color: '#a855f7',
          popular: false,
          badge: null,
          target: '🪒 Peluquerías, talleres, clínicas, tiendas',
          features: [
            'Hasta 3 páginas',
            'Diseño personalizado',
            'Formulario de contacto',
            'Diseño responsive',
            'SSL incluido',
            'Entrega en 1 semana',
          ],
          notIncluded: ['Animaciones avanzadas', 'Blog', 'Tienda online'],
        },
        {
          name: 'Profesional',
          price: '350 – 600€',
          desc: 'Para empresas y profesionales que quieren destacar con una web completa.',
          color: '#6366f1',
          popular: true,
          badge: 'Más popular',
          target: '🏢 Agencias, consultoras, empresas medianas',
          features: [
            'Hasta 6 páginas',
            'Diseño premium',
            'Animaciones GSAP',
            'Blog o noticias',
            'Google Analytics',
            'Formulario de contacto',
            'Entrega en 2-3 semanas',
          ],
          notIncluded: ['Tienda online'],
        },
        {
          name: 'E-commerce',
          price: '800 – 1.500€',
          desc: 'Solución completa para vender tus productos online las 24 horas del día.',
          color: '#ec4899',
          popular: false,
          badge: null,
          target: '🛒 Tiendas, marcas, productos físicos o digitales',
          features: [
            'Todo lo del plan Profesional',
            'Tienda online completa',
            'Pasarela de pago (Stripe)',
            'Hasta 30 productos',
            'Panel de pedidos',
            'Emails automáticos',
          ],
          notIncluded: [],
        },
      ].map((plan, i) => (
        <div key={i} style={{
          padding: '36px 28px',
          borderRadius: '24px',
          border: plan.popular ? '2px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
          background: plan.popular ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)',
          position: 'relative',
        }}>

          {plan.badge && (
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(90deg, #6366f1, #a855f7)',
              color: 'white', fontSize: '12px', fontWeight: '600',
              padding: '4px 20px', borderRadius: '999px', whiteSpace: 'nowrap'
            }}>
              ⭐ {plan.badge}
            </div>
          )}

          <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>{plan.name}</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '20px', lineHeight: '1.6' }}>{plan.desc}</p>

          <div style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '36px', fontWeight: '700' }}>{plan.price}</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', marginBottom: '24px' }}>pago único · sin costes ocultos</p>

          <div style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.5)',
            background: 'rgba(255,255,255,0.05)', borderRadius: '10px',
            padding: '8px 12px', marginBottom: '24px'
          }}>
            {plan.target}
          </div>

          <a href="#contacto" style={{
            display: 'block', textAlign: 'center',
            padding: '14px', borderRadius: '12px', fontWeight: '600',
            fontSize: '15px', textDecoration: 'none', marginBottom: '24px',
            background: plan.popular ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.07)',
            color: 'white', border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.15)',
          }}>
            Solicitar este plan
          </a>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
            {plan.features.map((f, j) => (
              <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
            {plan.notIncluded?.map((f, j) => (
              <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
                <span style={{ flexShrink: 0 }}>✕</span>{f}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Banner mantenimiento */}
    <div style={{
      marginTop: '48px', padding: '24px 32px', borderRadius: '16px',
      border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.05)',
      display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'
    }}>
      <span style={{ fontSize: '28px' }}>🔧</span>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Mantenimiento mensual disponible</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          Tu web siempre actualizada y segura por solo <strong style={{ color: 'white' }}>40 – 80€/mes</strong>. Incluye backups, soporte, hosting y cambios de contenido.
        </p>
      </div>
      <a href="#contacto" style={{
        padding: '12px 24px', borderRadius: '10px',
        background: 'rgba(34,197,94,0.15)', color: '#22c55e',
        border: '1px solid rgba(34,197,94,0.3)', textDecoration: 'none',
        fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap'
      }}>
        Más info
      </a>
    </div>

  </div>
</section>

{/* SOBRE MÍ */}
<section id="sobre-mi" style={{ padding: '100px 24px' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '64px', alignItems: 'center'
    }}>

      {/* Avatar */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '240px', height: '240px', borderRadius: '32px',
            background: 'linear-gradient(135deg, #a855f7, #6366f1, #ec4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '72px', fontWeight: '700', color: 'white',
            letterSpacing: '-2px'
          }}>
            MC
          </div>
          {/* Badge Barcelona */}
          <div style={{
            position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)',
            background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px', padding: '8px 20px', whiteSpace: 'nowrap',
            display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px'
          }}>
            📍 Barcelona, España
          </div>
        </div>
      </div>

      {/* Texto */}
      <div>
        <div style={{
          display: 'inline-block', marginBottom: '16px', padding: '6px 20px',
          borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', fontSize: '14px'
        }}>
          👋 Sobre mí
        </div>

        <h2 style={{ fontSize: '38px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
          Hola, soy <span style={{
            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent'
          }}>Mario Calero</span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
          Tengo 19 años y soy desarrollador web freelance con base en Barcelona.
          Fundé <strong style={{ color: 'white' }}>SDM Digital</strong> con un objetivo claro:
          ayudar a empresas y negocios a tener una presencia online profesional,
          atractiva y que realmente funcione.
        </p>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
          Me apasiona el diseño moderno, las animaciones y crear experiencias web
          que sorprendan a los visitantes. Cada proyecto lo trato como si fuera el mío propio.
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { value: '100%', label: 'Compromiso' },
            { value: '19', label: 'Años de edad' },
            { value: '✓', label: 'Basado en BCN' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '16px', borderRadius: '14px', textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Figma', 'Node.js', 'Git & GitHub'].map((skill, i) => (
            <span key={i} style={{
              padding: '6px 14px', borderRadius: '999px', fontSize: '13px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* CONTACTO */}
<section id="contacto" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.02)' }}>
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>

    {/* Título */}
    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
      <div style={{
        display: 'inline-block', marginBottom: '16px', padding: '6px 20px',
        borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', fontSize: '14px'
      }}>
        ✉️ Contacto
      </div>
      <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
        Hablemos de tu{' '}
        <span style={{
          background: 'linear-gradient(90deg, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent'
        }}>proyecto</span>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
        Cuéntame qué necesitas y te respondo en menos de 24 horas.
      </p>
    </div>

    {/* Card formulario */}
    <div style={{
      padding: '48px', borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.03)'
    }}>

      {/* Datos de contacto directo */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
        {[
          { icon: '📧', label: 'Email', value: 'sdmservice.contact.us@gmail.com' },
          { icon: '📍', label: 'Ubicación', value: 'Barcelona, España' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '16px', borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.03)'
          }}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>{item.label}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Nombre
          </label>
          <input
  type="text"
  name="from_name"
  value={formData.from_name}
  onChange={handleChange}
  placeholder="Tu nombre"
  style={{
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)', color: 'white',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  }}
/>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Email
          </label>
          <input
  type="email"
  name="from_email"
  value={formData.from_email}
  onChange={handleChange}
  placeholder="tu@email.com"
  style={{
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)', color: 'white',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  }}
/>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
          Servicio que necesitas
        </label>
        <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  style={{
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#1a1a2e', color: 'rgba(255,255,255,0.7)',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  }}>
  <option value="">Selecciona un servicio...</option>
  <option value="Web básica (150-250€)">Web básica (150 – 250€)</option>
  <option value="Web profesional (350-600€)">Web profesional (350 – 600€)</option>
  <option value="Tienda online (800-1500€)">Tienda online (800 – 1.500€)</option>
  <option value="Mantenimiento mensual (40-80€/mes)">Mantenimiento mensual (40 – 80€/mes)</option>
  <option value="Otro">Otro / No lo sé aún</option>
</select>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
          Cuéntame tu proyecto
        </label>
        <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Describe brevemente tu negocio y lo que necesitas..."
  rows={5}
  style={{
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)', color: 'white',
    fontSize: '14px', outline: 'none', resize: 'vertical',
    boxSizing: 'border-box', fontFamily: 'inherit'
  }}
/>
      </div>

      {sent ? (
        <div style={{
          width: '100%', padding: '16px', borderRadius: '12px',
          background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
          color: '#22c55e', textAlign: 'center', fontSize: '16px', fontWeight: '600'
        }}>
          ✓ Mensaje enviado — te respondo en menos de 24h
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={sending}
          style={{
            width: '100%', padding: '16px', borderRadius: '12px',
            border: 'none', cursor: sending ? 'not-allowed' : 'pointer',
            fontSize: '16px', fontWeight: '600', color: 'white',
            background: sending ? 'rgba(168,85,247,0.5)' : 'linear-gradient(90deg, #a855f7, #6366f1)',
            transition: 'opacity 0.2s'
          }}>
          {sending ? 'Enviando...' : 'Enviar mensaje 🚀'}
        </button>
      )}

      <p style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '16px' }}>
        Te respondo en menos de 24 horas · Sin compromiso
      </p>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer style={{
  padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.06)',
  textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px'
}}>
  © 2025 SDM Digital · Mario Calero · Barcelona
</footer>


    </main>
  )
}