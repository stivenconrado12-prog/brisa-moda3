function PiePagina() {
  return (
    <footer id="contacto" className="mt-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm sm:grid-cols-3">
        <div>
          <p className="font-titulo text-xl font-bold text-white">
            FIGU <span className="texto-galaxia">RAMA</span>
          </p>
          <p className="mt-2">
            Figuras de acción y accesorios para que vivas la experiencia de coleccionar a tus
            héroes favoritos.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Visítanos</p>
          <p>Calle de la Moneda, Centro · Cartagena</p>
          <p>Lunes a sábado, 9:00 a. m. a 7:00 p. m.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Escríbenos</p>
          <p>WhatsApp: 304 451 0263</p>
          <p>hola@figurama.ejemplo</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-hielo-400">
        © 2026 FIGURAMA · Proyecto formativo SENA ADSO
      </p>
    </footer>
  )
}

export default PiePagina
