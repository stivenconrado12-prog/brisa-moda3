const CATEGORIAS = [
  { valor: 'todas', nombre: 'Todo' },
  { valor: 'marvel', nombre: 'Marvel' },
  { valor: 'dc', nombre: 'DC' },
  { valor: 'x-men', nombre: 'X-Men' },
  { valor: 'accesorios', nombre: 'Accesorios' },
]

function Filtros({ categoria, onCategoria, busqueda, onBusqueda, orden, onOrden }) {
  return (
    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {CATEGORIAS.map((c) => (
          <button
            key={c.valor}
            onClick={() => onCategoria(c.valor)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              categoria === c.valor
                ? 'boton-neon'
                : 'bg-nieve-100/70 text-hielo-300 ring-1 ring-marca-500/30 hover:text-white hover:ring-neon-500'
            }`}
          >
            {c.nombre}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="search"
          value={busqueda}
          onChange={(e) => onBusqueda(e.target.value)}
          placeholder="Buscar figura…"
          aria-label="Buscar figura"
          className="campo w-full rounded-full px-4 py-2 text-sm md:w-56"
        />
        <select
          value={orden}
          onChange={(e) => onOrden(e.target.value)}
          aria-label="Ordenar"
          className="campo rounded-full px-3 py-2 text-sm"
        >
          <option value="destacados">Destacados</option>
          <option value="menor">Menor precio</option>
          <option value="mayor">Mayor precio</option>
        </select>
      </div>
    </div>
  )
}

export default Filtros
