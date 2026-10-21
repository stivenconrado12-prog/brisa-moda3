import TarjetaProducto from './TarjetaProducto.jsx'

function ListaProductos({ productos, cargando, onVerDetalle }) {
  if (cargando) {
    return <p className="py-16 text-center text-hielo-300">Cargando productos…</p>
  }

  if (productos.length === 0) {
    return (
      <p className="py-16 text-center text-hielo-300">
        No encontramos figuras con esos filtros.
      </p>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productos.map((p) => (
        <TarjetaProducto key={p.id} producto={p} onVerDetalle={onVerDetalle} />
      ))}
    </div>
  )
}

export default ListaProductos
