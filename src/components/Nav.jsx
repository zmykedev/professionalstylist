import { useEffect, useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
]

export function Nav() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft py-4'
          : 'py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          <a
            href="#inicio"
            aria-label="Inicio — Mariely Salinas"
            className="font-heading text-2xl font-normal tracking-[0.02em] text-charcoal"
          >
            Mariely <em className="not-italic italic text-blush-dark">Salinas</em>
          </a>

          {/* Desktop links */}
          <ul role="list" className="hidden md:flex items-center gap-10 list-none">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-[0.72rem] font-medium tracking-[0.12em] uppercase text-gray-mid transition-colors duration-200 hover:text-charcoal
                    after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-blush-dark after:transition-all after:duration-400 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/56912345678?text=Hola!%20Quisiera%20reservar%20una%20hora"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase px-8 py-4 rounded-full bg-charcoal text-white transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:shadow-card hover:bg-[#2d2d2d]"
          >
            Reservar hora
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-[22px] h-[1.5px] bg-charcoal" />
            <span className="block w-[22px] h-[1.5px] bg-charcoal" />
            <span className="block w-[22px] h-[1.5px] bg-charcoal" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 bg-cream z-[200] flex flex-col justify-center items-center gap-12">
          <button
            className="absolute top-6 right-6 text-2xl cursor-pointer bg-transparent border-none text-charcoal p-2"
            aria-label="Cerrar menú"
            onClick={close}
          >
            ✕
          </button>
          <ul role="list" className="list-none flex flex-col items-center gap-10">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="text-[0.9rem] font-medium tracking-[0.18em] uppercase text-gray-mid hover:text-charcoal transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
