import { useReveal } from '../hooks/useReveal'

const QUALITIES = [
  'Cortes de precisión adaptados a cada tipo de rostro y cabello',
  'Técnicas actualizadas con las últimas tendencias internacionales',
  'Asesoría integral de imagen incluida en cada visita',
]

const NUMS = [
  { value: '10', sup: '+', label: 'Años' },
  { value: '500', sup: '+', label: 'Clientas' },
  { value: '3', sup: null, label: 'Países' },
]

export function About() {
  const img = useReveal()
  const content = useReveal()

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-h"
      className="bg-white py-24 md:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Images */}
          <div
            ref={img.ref}
            className={`relative reveal ${img.visible ? 'visible' : ''}`}
          >
            <img
              className="w-full aspect-[3/4] object-cover rounded-[24px]"
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80&auto=format&fit=crop"
              alt="Mariely Salinas, estilista profesional en su salón"
              loading="lazy"
            />
            <img
              className="absolute w-[46%] aspect-square object-cover rounded-[12px] border-[6px] border-white shadow-deep bottom-[-2rem] right-[-1rem] md:right-[-3rem]"
              src="https://images.unsplash.com/photo-1560066984-138daaa4e7b4?w=400&q=80&auto=format&fit=crop"
              alt="Detalle de un corte de cabello de precisión"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div
            ref={content.ref}
            className={`pt-4 reveal [transition-delay:0.2s] ${content.visible ? 'visible' : ''}`}
          >
            <span className="block text-[0.68rem] font-medium tracking-[0.22em] uppercase text-gray-mid mb-3">
              Sobre mí
            </span>
            <h2
              id="about-h"
              className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mt-3 mb-6"
            >
              Pasión por el arte
              <br />
              <em className="italic text-blush-dark">del cabello</em>
            </h2>

            <p className="text-gray-mid text-[0.92rem] leading-[1.88] mb-4">
              Soy Mariely Salinas, estilista con más de 10 años transformando la
              confianza y el estilo de mis clientas. Me especializo en cortes de
              precisión que realzan la belleza natural de cada persona.
            </p>
            <p className="text-gray-mid text-[0.92rem] leading-[1.88] mb-4">
              Formada en las mejores academias de Santiago y con experiencia en
              salones internacionales de Buenos Aires y Madrid. Cada corte es una
              obra de arte diseñada exclusivamente para ti.
            </p>

            <div className="flex flex-col gap-[0.9rem] my-8">
              {QUALITIES.map((q) => (
                <div key={q} className="flex items-start gap-[0.9rem]">
                  <div className="w-[7px] h-[7px] rounded-full bg-blush-dark flex-shrink-0 mt-[0.5rem]" />
                  <span className="text-[0.88rem] text-charcoal">{q}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-10 flex-wrap mt-10 pt-10 border-t border-gray-border">
              {NUMS.map(({ value, sup, label }) => (
                <div key={label}>
                  <div className="font-heading text-[2.5rem] font-light text-charcoal leading-none">
                    {value}
                    {sup ? (
                      <sup className="text-[0.9rem] text-blush-dark">{sup}</sup>
                    ) : null}
                  </div>
                  <div className="text-[0.68rem] tracking-[0.1em] uppercase text-gray-mid mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
