import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    icon: '✂',
    num: '01',
    title: 'Corte de Cabello',
    desc: 'Cortes de precisión adaptados a tu estructura facial, tipo de cabello y estilo de vida. Desde clásicos atemporales hasta vanguardistas.',
    price: 'Desde $15.000',
    delay: '0.1s',
  },
  {
    icon: '💫',
    num: '02',
    title: 'Peinados',
    desc: 'Para cualquier ocasión: eventos sociales, matrimonios o el día a día. Ondas naturales, lisos perfectos, recogidos y más.',
    price: 'Desde $20.000',
    delay: '0.22s',
  },
  {
    icon: '🌿',
    num: '03',
    title: 'Asesoría de Imagen',
    desc: 'Consultoría personalizada para descubrir el look que mejor exprese tu personalidad, potencial y estilo de vida único.',
    price: 'Desde $30.000',
    delay: '0.38s',
  },
]

function ServiceCard({ icon, num, title, desc, price, delay, revealRef, visible }) {
  return (
    <article
      ref={revealRef}
      style={{ transitionDelay: delay }}
      className={`group relative bg-white rounded-[24px] p-10 border border-gray-border overflow-hidden transition-all duration-500 ease-smooth hover:-translate-y-[7px] hover:shadow-deep reveal ${visible ? 'visible' : ''}`}
    >
      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blush to-blush-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-smooth" />

      <div className="w-[52px] h-[52px] bg-blush-light rounded-[12px] flex items-center justify-center text-[1.4rem] mb-6 transition-colors duration-200 group-hover:bg-blush">
        {icon}
      </div>

      <span
        aria-hidden="true"
        className="absolute top-8 right-8 font-heading text-[3rem] font-light text-gray-border leading-none"
      >
        {num}
      </span>

      <h3 className="font-heading text-[1.55rem] font-normal mb-3">{title}</h3>
      <p className="text-[0.875rem] text-gray-mid leading-[1.72] mb-6">{desc}</p>
      <div className="font-heading text-[1.3rem] font-normal text-blush-dark">
        {price} <span className="text-[0.7rem] font-body text-gray-light tracking-[0.06em]">CLP</span>
      </div>
    </article>
  )
}

export function Services() {
  const header = useReveal()
  const card1 = useReveal()
  const card2 = useReveal()
  const card3 = useReveal()

  const cards = [card1, card2, card3]

  return (
    <section
      id="servicios"
      aria-labelledby="services-h"
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
            Mis servicios
          </span>
          <span className="block text-[0.68rem] font-medium tracking-[0.22em] uppercase text-gray-mid mb-3">
            Lo que ofrezco
          </span>
          <h2
            id="services-h"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-4"
          >
            Servicios diseñados
            <br />
            para realzarte
          </h2>
          <p className="text-gray-mid text-[0.92rem] leading-[1.85]">
            Cada servicio está pensado para darte la mejor experiencia y
            resultados que superen tus expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.num}
              {...s}
              revealRef={cards[i].ref}
              visible={cards[i].visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
