import { motion } from 'motion/react'

const WA_URL =
  "https://wa.me/56954679884?text=Hola!%20Quisiera%20reservar%20una%20hora";

const STATS = [
  { value: "10", sup: "+", label: "Años de experiencia" },
  { value: "500", sup: "+", label: "Clientas felices" },
  { value: "★ 5.0", sup: null, label: "Calificación promedio" },
];

// Remotion-style crisp ease-out
const CRISP = [0.16, 1, 0.3, 1];
// Editorial balanced ease-in-out
const EDITORIAL = [0.45, 0, 0.55, 1];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación principal"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden relative mt-20"
    >
      {/* Content */}
      <div className="flex flex-col justify-center px-6 pt-28 pb-20 md:pt-12 md:pb-12 md:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] md:pr-16 md:max-w-[640px]">

        {/* Eyebrow line */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          aria-hidden="true"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: CRISP, delay: 0.1 }}
        >
          <span className="block w-10 h-px bg-blush-dark flex-shrink-0" />
          <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-gray-mid">
            Estilista Profesional · Santiago
          </span>
        </motion.div>

        {/* Heading — line-mask reveal (Remotion text-animation pattern) */}
        <h1 className="font-heading font-light leading-[1.02] tracking-[-0.02em] mb-4">
          <div className="overflow-hidden">
            <motion.span
              className="block text-[clamp(3rem,7.5vw,6.5rem)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: CRISP, delay: 0.18 }}
            >
              Mariely
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block text-[clamp(3rem,7.5vw,6.5rem)] italic text-blush-dark"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: CRISP, delay: 0.32 }}
            >
              Salinas
            </motion.span>
          </div>
        </h1>

        {/* Script subtitle */}
        <motion.p
          className="font-script text-[clamp(1.5rem,3vw,2.2rem)] text-gray-mid mb-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: CRISP, delay: 0.48 }}
        >
          Transformando tu estilo con elegancia
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center flex-wrap gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: CRISP, delay: 0.62 }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase px-9 py-4 rounded-full bg-charcoal text-white transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:shadow-card hover:bg-[#2d2d2d] active:translate-y-px"
          >
            Reservar hora
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase px-9 py-4 rounded-full bg-transparent text-charcoal border border-charcoal transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:bg-charcoal hover:text-white active:translate-y-px"
          >
            Ver trabajos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-10 flex-wrap mt-16 pt-12 border-t border-gray-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: CRISP, delay: 0.78 }}
        >
          {STATS.map(({ value, sup, label }) => (
            <div key={label}>
              <div className="font-heading text-[2.4rem] font-light text-charcoal leading-none">
                {value}
                {sup ? (
                  <sup className="text-[1.1rem] text-blush-dark align-super">
                    {sup}
                  </sup>
                ) : null}
              </div>
              <div className="text-[0.72rem] text-gray-mid tracking-[0.06em] mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image panel — slides in from right */}
      <motion.div
        className="relative overflow-hidden min-h-[55vw] md:min-h-0"
        aria-hidden="true"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.15, ease: CRISP, delay: 0.05 }}
      >
        <img
          src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=900&q=80&auto=format&fit=crop"
          alt="Estilista profesional trabajando en un corte de cabello"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blush/[0.08] to-charcoal/[0.04] pointer-events-none" />
      </motion.div>

      {/* Scroll indicator — animated dot that loops downward */}
      <motion.div
        className="absolute bottom-10 left-1/2 md:left-1/4 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EDITORIAL, delay: 1.3 }}
      >
        <span className="text-[0.62rem] tracking-[0.22em] uppercase text-gray-light">
          Scroll
        </span>
        <div className="relative flex flex-col items-center h-10 w-4">
          <motion.div
            className="w-[5px] h-[5px] rounded-full bg-blush-dark absolute top-0"
            animate={{ y: [0, 20, 20, 0], opacity: [1, 0, 0, 1] }}
            transition={{ duration: 1.8, ease: EDITORIAL, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <div className="w-px h-full bg-gradient-to-b from-blush-dark/30 to-transparent mt-1" />
        </div>
      </motion.div>
    </section>
  );
}
