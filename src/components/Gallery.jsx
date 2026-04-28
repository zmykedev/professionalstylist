import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80&auto=format&fit=crop',
    alt: 'Corte bob elegante',
    caption: 'Bob clásico',
    delay: '0.1s',
  },
  {
    src: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80&auto=format&fit=crop',
    alt: 'Ondas naturales',
    caption: 'Ondas naturales',
    delay: '0.22s',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80&auto=format&fit=crop',
    alt: 'Corte pixie moderno',
    caption: 'Pixie moderno',
    delay: '0.38s',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80&auto=format&fit=crop',
    alt: 'Liso sedoso',
    caption: 'Liso sedoso',
    delay: '0.1s',
  },
  {
    src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=700&q=80&auto=format&fit=crop',
    alt: 'Recogido elegante',
    caption: 'Recogido elegante',
    delay: '0.22s',
  },
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=80&auto=format&fit=crop',
    alt: 'Corte en capas dinámicas',
    caption: 'Capas dinámicas',
    delay: '0.38s',
  },
]

function GalleryItem({ src, alt, caption, delay, revealRef, visible }) {
  return (
    <div
      ref={revealRef}
      style={{ transitionDelay: delay }}
      className={`gallery-item group relative overflow-hidden rounded-[12px] aspect-[3/4] bg-blush-light cursor-pointer reveal ${visible ? 'visible' : ''}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-smooth flex items-end p-6"
      >
        <span className="text-white text-[0.78rem] font-medium tracking-[0.06em]">
          {caption}
        </span>
      </div>
    </div>
  )
}

export function Gallery() {
  const header = useReveal()
  const reveals = ITEMS.map(() => useReveal()) // eslint-disable-line react-hooks/rules-of-hooks

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-h"
      className="bg-white py-24 md:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center max-w-[580px] mx-auto mb-18 reveal ${header.visible ? 'visible' : ''}`}
        >
          <span className="block text-[0.68rem] font-medium tracking-[0.22em] uppercase text-gray-mid mb-3">
            Mi trabajo
          </span>
          <h2
            id="gallery-h"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-4"
          >
            Transformaciones
            <br />
            que hablan por sí solas
          </h2>
          <p className="text-gray-mid text-[0.92rem] leading-[1.85]">
            Una selección de trabajos recientes que reflejan mi dedicación y
            pasión por el arte del cabello.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {ITEMS.map((item, i) => (
            <GalleryItem
              key={item.caption}
              {...item}
              revealRef={reveals[i].ref}
              visible={reveals[i].visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
