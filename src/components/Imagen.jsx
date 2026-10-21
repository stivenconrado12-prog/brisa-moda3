// Imagen con respaldo: si el archivo todavía no existe en public/img,
// se muestra una imagen galáctica de relleno en su lugar.
const RESPALDO = '/img/placeholder.svg'

function Imagen({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        if (!e.currentTarget.src.endsWith(RESPALDO)) e.currentTarget.src = RESPALDO
      }}
    />
  )
}

export default Imagen
