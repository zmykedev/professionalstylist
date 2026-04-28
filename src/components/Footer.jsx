const YEAR = new Date().getFullYear()

const NAV = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#111] py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="font-heading text-[1.2rem] text-white/45">
            Mariely <em className="italic text-blush">Salinas</em>
          </div>
          <p className="text-[0.72rem] text-white/25 tracking-[0.05em]">
            © {YEAR} Mariely Salinas — Todos los derechos reservados
          </p>
          <ul role="list" className="flex gap-6 list-none">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.72rem] text-white/28 transition-colors duration-200 tracking-[0.06em] hover:text-white/65"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
