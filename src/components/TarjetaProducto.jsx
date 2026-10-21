import { pesos } from '../utils/formato.js'
import Imagen from './Imagen.jsx'

function TarjetaProducto({ producto, onVerDetalle }) {
  return (
    <article
      className="tarjeta group flex flex-col overflow-hidden rounded-2xl transition duration-300
        hover:-translate-y-1.5 hover:shadow-figura-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-medianoche-900">
        <Imagen
          src={producto.imagen}
          alt={producto.nombre}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {producto.nuevo && (
          <span
            className="boton-neon absolute top-3 left-3 rounded-full px-3 py-1 text-xs
              font-semibold"
          >
            Nuevo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs tracking-widest text-neon-400 uppercase">{producto.categoria}</p>
        <h3 className="font-cuerpo text-base font-semibold text-white">{producto.nombre}</h3>
        <p className="text-lg font-bold text-hielo-300">{pesos(producto.precio)}</p>
        <button
          onClick={() => onVerDetalle(producto)}
          className="boton-borde mt-auto rounded-full py-2 text-sm font-semibold"
        >
          Ver detalle
        </button>
      </div>
    </article>
  )
}

export default TarjetaProducto
