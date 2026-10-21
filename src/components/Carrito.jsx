import { pesos } from '../utils/formato.js'
import Imagen from './Imagen.jsx'

function Carrito({ items, onCerrar, onCambiarCantidad, onQuitar, onPedir }) {
  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <div className="fixed inset-0 z-40 flex justify-end bg-black/70 backdrop-blur-sm" onClick={onCerrar}>
      <aside
        className="panel-galaxia flex h-full w-full max-w-md flex-col rounded-none border-r-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-marca-500/30 p-4">
          <h2 className="font-titulo text-2xl font-bold text-white">Tu carrito</h2>
          <button
            onClick={onCerrar}
            aria-label="Cerrar carrito"
            className="text-3xl leading-none text-hielo-400 hover:text-white"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <p className="flex-1 p-8 text-center text-hielo-300">Tu carrito está vacío.</p>
        ) : (
          <ul className="flex-1 divide-y divide-marca-500/20 overflow-y-auto px-4">
            {items.map((item) => (
              <li key={`${item.id}-${item.tamano}`} className="flex gap-3 py-4">
                <Imagen
                  src={item.imagen}
                  alt=""
                  className="h-20 w-20 rounded-lg object-cover ring-1 ring-marca-500/40"
                />
                <div className="flex flex-1 flex-col">
                  <p className="font-semibold text-white">{item.nombre}</p>
                  <p className="text-sm text-hielo-300">
                    {item.tamano} · {pesos(item.precio)}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <button
                      onClick={() => onCambiarCantidad(item, -1)}
                      aria-label="Quitar uno"
                      className="boton-borde h-8 w-8 rounded-full"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{item.cantidad}</span>
                    <button
                      onClick={() => onCambiarCantidad(item, 1)}
                      aria-label="Agregar uno"
                      className="boton-borde h-8 w-8 rounded-full"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onQuitar(item)}
                      className="ml-auto text-sm text-hielo-300 underline hover:text-neon-400"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-marca-500/30 p-4">
          <div className="flex justify-between text-lg font-bold text-white">
            <span>Total</span>
            <span className="texto-galaxia">{pesos(total)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onPedir}
            className="boton-neon mt-4 w-full rounded-full py-3 font-semibold"
          >
            Hacer pedido
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Carrito
