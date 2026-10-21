import { useEffect } from 'react'

function Aviso({ mensaje, onOcultar }) {
  // Cada vez que llega un mensaje nuevo, se oculta solo a los 3 segundos
  useEffect(() => {
    if (!mensaje) return
    const temporizador = setTimeout(() => onOcultar(''), 3000)
    return () => clearTimeout(temporizador)
  }, [mensaje, onOcultar])

  if (!mensaje) return null

  return (
    <div
      role="status"
      className="boton-neon fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3
        text-sm font-medium"
    >
      ✓ {mensaje}
    </div>
  )
}

export default Aviso
