import { useState } from 'react'
import { pesos } from '../utils/formato.js'
import Imagen from './Imagen.jsx'

function DetalleProducto({ producto, onCerrar, onAgregar }) {
  // Tamaño elegido por el cliente ('' = todavía no ha elegido)
  const [tamano, setTamano] = useState('')

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
      onClick={onCerrar}
    >
      <div
        className="panel-galaxia grid max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl
          md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Imagen src={producto.imagen} alt={producto.nombre} className="aspect-square w-full object-cover" />
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-titulo text-2xl font-bold text-white">{producto.nombre}</h3>
            <button
              onClick={onCerrar}
              aria-label="Cerrar"
              className="text-3xl leading-none text-hielo-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <p className="texto-galaxia text-2xl font-bold">{pesos(producto.precio)}</p>
          <p className="text-hielo-300">{producto.descripcion}</p>
          <div>
            <p className="mb-2 text-sm font-semibold text-white">Tamaño</p>
            <div className="flex flex-wrap gap-2">
              {producto.tamaños.map((t) => (
                <button
                  key={t}
                  onClick={() => setTamano(t)}
                  className={`min-w-16 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    tamano === t
                      ? 'boton-neon'
                      : 'bg-black/40 text-hielo-300 ring-1 ring-marca-500/40 hover:ring-neon-500'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={!tamano}
            onClick={() => onAgregar(producto, tamano)}
            className="boton-neon mt-auto rounded-full py-3 font-semibold"
          >
            {tamano ? 'Agregar al carrito' : 'Elige un tamaño'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto
