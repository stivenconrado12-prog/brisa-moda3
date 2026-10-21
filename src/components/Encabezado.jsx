function Encabezado({ cantidad, onAbrirCarrito }) {
  return (
    <header
      className="sticky top-0 z-30 border-b border-marca-500/30 bg-nieve-50/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="font-titulo text-2xl font-bold text-white">
          FIGU <span className="texto-galaxia">RAMA</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-hielo-100 sm:flex">
          <a href="#catalogo" className="transition hover:text-neon-400">
            Catálogo
          </a>
          <a href="#contacto" className="transition hover:text-neon-400">
            Contacto
          </a>
        </nav>
        <button
          onClick={onAbrirCarrito}
          className="boton-neon relative rounded-full px-5 py-2 text-sm font-semibold"
        >
          Carrito
          {cantidad > 0 && (
            <span
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                rounded-full bg-white text-xs font-bold text-marca-700"
            >
              {cantidad}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Encabezado
