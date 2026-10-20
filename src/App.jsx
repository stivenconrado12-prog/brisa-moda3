import { useEffect, useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import Portada from './components/Portada.jsx'
import ListaProductos from './components/ListaProductos.jsx'
import PiePagina from './components/PiePagina.jsx'

function App() {
  // Productos que llegan del archivo public/productos.json
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  // Cargar los productos una sola vez, cuando se abre la página
  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Encabezado />
      <Portada />
      <main id="catalogo" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
        <h2 className="font-titulo text-3xl font-bold text-mar-900">Catálogo</h2>
        <ListaProductos productos={productos} cargando={cargando} />
      </main>
      <PiePagina />
    </div>
  )
}

export default App