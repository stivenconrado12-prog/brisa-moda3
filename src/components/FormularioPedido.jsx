import { useState } from 'react'
import { pesos } from '../utils/formato.js'

// Número de WhatsApp de la tienda: 57 (Colombia) + celular, sin espacios
const WHATSAPP_TIENDA = '573001234567'

const estiloCampo = 'campo rounded-lg px-3 py-2 font-normal'

function FormularioPedido({ items, onCerrar, onEnviado }) {
  const [datos, setDatos] = useState({
    nombre: '',
    celular: '',
    direccion: '',
    pago: 'Contraentrega',
  })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  // Un solo manejador para todos los campos: usa el atributo name de cada campo
  function cambiar(evento) {
    setDatos({ ...datos, [evento.target.name]: evento.target.value })
  }

  // Devuelve un objeto con los errores encontrados (vacío si todo está bien)
  function validar() {
    const nuevos = {}
    if (datos.nombre.trim().length < 3) nuevos.nombre = 'Escribe tu nombre completo.'
    if (!/^3\d{9}$/.test(datos.celular)) {
      nuevos.celular = 'El celular debe tener 10 dígitos y empezar por 3.'
    }
    if (datos.direccion.trim().length < 5) nuevos.direccion = 'Escribe la dirección de entrega.'
    return nuevos
  }

  function enviar(evento) {
    evento.preventDefault() // evita que el navegador recargue la página
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    // Arma el mensaje del pedido: una línea por producto y luego los datos
    const lineas = items.map((item) => {
      const subtotal = pesos(item.precio * item.cantidad)
      return `- ${item.cantidad} x ${item.nombre} (${item.tamano}): ${subtotal}`
    })
    const mensaje = [
      '¡Hola, FIGURAMA! Quiero hacer este pedido:',
      ...lineas,
      `Total: ${pesos(total)}`,
      `Nombre: ${datos.nombre}`,
      `Celular: ${datos.celular}`,
      `Dirección: ${datos.direccion}`,
      `Pago: ${datos.pago}`,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP_TIENDA}?text=${encodeURIComponent(mensaje)}`, '_blank')
    setEnviado(true)
    onEnviado()
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
      onClick={onCerrar}
    >
      <div
        className="panel-galaxia max-h-full w-full max-w-lg overflow-y-auto rounded-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {enviado ? (
          <div className="py-6 text-center">
            <h2 className="font-titulo text-2xl font-bold text-white">¡Pedido enviado!</h2>
            <p className="mt-2 text-hielo-300">
              Se abrió WhatsApp con el resumen de tu pedido. Envía el mensaje y te confirmaremos
              la entrega.
            </p>
            <button
              onClick={onCerrar}
              className="boton-neon mt-6 rounded-full px-6 py-3 font-semibold"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
            <h2 className="font-titulo text-2xl font-bold text-white">Datos de entrega</h2>
            <p className="rounded-lg bg-marca-500/15 p-3 text-sm ring-1 ring-marca-500/30">
              Total del pedido: <strong>{pesos(total)}</strong>
            </p>

            <label className="flex flex-col gap-1 text-sm font-medium">
              Nombre completo
              <input name="nombre" value={datos.nombre} onChange={cambiar} className={estiloCampo} />
              {errores.nombre && <span className="text-pink-400">{errores.nombre}</span>}
            </label>

            <label className="flex flex-col gap-1 text-sm font-medium">
              Celular
              <input
                name="celular"
                type="tel"
                value={datos.celular}
                onChange={cambiar}
                placeholder="3001234567"
                className={estiloCampo}
              />
              {errores.celular && <span className="text-pink-400">{errores.celular}</span>}
            </label>

            <label className="flex flex-col gap-1 text-sm font-medium">
              Dirección y barrio
              <input
                name="direccion"
                value={datos.direccion}
                onChange={cambiar}
                placeholder="Calle de la Moneda # 5-20, Centro"
                className={estiloCampo}
              />
              {errores.direccion && <span className="text-pink-400">{errores.direccion}</span>}
            </label>

            <label className="flex flex-col gap-1 text-sm font-medium">
              Forma de pago
              <select name="pago" value={datos.pago} onChange={cambiar} className={estiloCampo}>
                <option>Contraentrega</option>
                <option>Nequi</option>
                <option>Daviplata</option>
                <option>Transferencia bancaria</option>
              </select>
            </label>

            <div className="mt-2 flex gap-3">
              <button
                type="button"
                onClick={onCerrar}
                className="boton-borde flex-1 rounded-full py-3 font-semibold"
              >
                Volver
              </button>
              <button
                type="submit"
                className="boton-neon flex-1 rounded-full py-3 font-semibold"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default FormularioPedido