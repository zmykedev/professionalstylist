import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    text: 'Valeria es absolutamente brillante. Me hizo un corte que transformó por completo mi look. Entendió exactamente lo que quería y el resultado fue perfecto. ¡Ya llevo 3 años siendo clienta fiel!',
    name: 'Camila Rodríguez',
    role: 'Clienta fiel · Providencia',
    avatar: 'https://i.pravatar.cc/100?img=47',
    delay: '0.1s',
  },
  {
    text: 'Vine buscando renovar mi imagen y me fui con mucho más. La asesoría de Valeria fue increíble, me ayudó a encontrar un estilo que realmente me representa. Súper profesional y atenta.',
    name: 'Sofía Muñoz',
    role: 'Clienta nueva · Las Condes',
    avatar: 'https://i.pravatar.cc/100?img=44',
    delay: '0.22s',
  },
  {
    text: 'El peinado que Valeria me hizo para mi matrimonio fue el sueño. Duró toda la noche, lució impecable en las fotos. Tiene un talento especial para escuchar y hacer magia.',
    name: 'Isadora Vera',
    role: 'Novia 2024 · Ñuñoa',
    avatar: 'https://i.pravatar.cc/100?img=56',
    delay: '0.38s',
  },
]

function TestiCard({ text, name, role, avatar, delay, revealRef, visible }) {
  return (
    <article
      ref={revealRef}
      style={{ transitionDelay: delay }}
      className={`bg-white rounded-[24px] p-10 border border-gray-border transition-all duration-500 ease-smooth hover:-translate-y-[5px] hover:shadow-card reveal ${visible ? 'visible' : ''}`}
    >
      <div
        className="flex gap-[2px] mb-4"
        aria-label="5 de 5 estrellas"
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} aria-hidden="true" className="text-blush-dark text-[0.85rem]">★</span>
        ))}
      </div>

      <span aria-hidden="true" className="block font-heading text-[5rem] font-light text-blush-light leading-[0.9] mb-[-0.5rem]">
        "
      </span>

      <p className="text-[0.88rem] text-gray-mid leading-[1.82] italic mb-8">
        {text}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={`Fotografía de ${name}`}
          className="w-11 h-11 rounded-full object-cover border-2 border-blush-light flex-shrink-0"
          loading="lazy"
        />
        <div>
          <div className="text-[0.875rem] font-medium text-charcoal">{name}</div>
          <div className="text-[0.72rem] text-gray-light tracking-[0.05em]">{role}</div>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const header = useReveal()
  const reveals = TESTIMONIALS.map(() => useReveal()) // eslint-disable-line react-hooks/rules-of-hooks

  return (
    <section
      id="testimonios"
      aria-labelledby="testi-h"
      className="bg-cream py-24 md:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center max-w-[580px] mx-auto mb-18 reveal ${header.visible ? 'visible' : ''}`}
        >
          <span
            aria-hidden="true"
            className="block font-script text-[1.4rem] text-blush-dark mb-1"
          >
            Lo que dicen
          </span>
          <span className="block text-[0.68rem] font-medium tracking-[0.22em] uppercase text-gray-mid mb-3">
            Testimonios
          </span>
          <h2
            id="testi-h"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]"
          >
            Clientas que confían
            <br />
            en mi trabajo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestiCard
              key={t.name}
              {...t}
              revealRef={reveals[i].ref}
              visible={reveals[i].visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
