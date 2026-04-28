import { useReveal } from '../hooks/useReveal'

const WA_URL =
  'https://wa.me/56912345678?text=Hola%20Valeria!%20Quisiera%20reservar%20una%20hora%20para%20un%20corte%20de%20cabello.'

const DETAILS = [
  { icon: '📍', text: 'Av. Providencia 1234, Providencia, Santiago' },
  { icon: '⏰', text: 'Lunes a Sábado: 9:00 – 19:00 hrs' },
  { icon: '📞', text: '+56 9 1234 5678' },
]

const SOCIALS = [
  {
    label: 'Instagram de Mariely Salinas',
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'TikTok de Mariely Salinas',
    name: 'TikTok',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    label: 'Facebook de Mariely Salinas',
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]

export function Contact() {
  const left = useReveal()
  const card = useReveal()

  return (
    <section
      id="contacto"
      aria-labelledby="contact-h"
      className="bg-charcoal py-24 md:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={left.ref}
            className={`reveal ${left.visible ? 'visible' : ''}`}
          >
            <span className="block text-[0.68rem] font-medium tracking-[0.22em] uppercase text-blush mb-4">
              Contacto
            </span>
            <h2
              id="contact-h"
              className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-white mb-6"
            >
              Agenda tu
              <br />
              <em className="italic text-blush">próxima cita</em>
            </h2>
            <p className="text-white/55 text-[0.92rem] leading-[1.82] mb-10">
              ¿Lista para transformar tu look? Contáctame y juntas encontraremos
              el estilo que mejor te represente.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {DETAILS.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-[0.875rem] text-white/65">
                  <div className="w-10 h-10 rounded-[4px] bg-white/[0.07] flex items-center justify-center text-base flex-shrink-0">
                    {icon}
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center flex-wrap gap-3 mt-8">
              {SOCIALS.map(({ label, name, path }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={label}
                  className="inline-flex items-center gap-[0.55rem] text-[0.7rem] font-medium tracking-[0.1em] uppercase text-white/50 px-5 py-[0.55rem] border border-white/15 rounded-full transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/[0.06]"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d={path} />
                  </svg>
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Card */}
          <div
            ref={card.ref}
            className={`bg-white/[0.04] border border-white/10 rounded-[24px] p-12 flex flex-col gap-6 reveal [transition-delay:0.2s] ${card.visible ? 'visible' : ''}`}
          >
            <h3 className="font-heading text-[1.9rem] font-light leading-[1.15] text-white">
              ¿Lista para tu
              <br />
              transformación?
            </h3>
            <p className="text-[0.875rem] text-white/45 leading-[1.75]">
              Reserva tu hora ahora mismo por WhatsApp. Respondo todos los
              mensajes con prontitud y con gusto te oriento sobre qué servicio
              es el más adecuado para ti.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a Mariely por WhatsApp para reservar hora"
              className="inline-flex items-center gap-3 text-[0.8rem] font-medium tracking-[0.14em] uppercase px-10 py-[1.1rem] rounded-full bg-[#25d366] text-white transition-all duration-400 ease-smooth hover:-translate-y-[3px] hover:bg-[#1ebe5b] hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] active:translate-y-px self-start"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
