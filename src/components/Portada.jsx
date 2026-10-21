import Imagen from './Imagen.jsx'

function Portada() {
  return (
    <section className="relative overflow-hidden border-b border-marca-500/20">
      {/* Resplandor de nebulosa detrás del texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full
          bg-marca-600/30 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-widest text-neon-400 uppercase">
            Colección desde 2014 hasta 2026
          </p>
          <h1 className="font-titulo text-4xl leading-tight font-bold md:text-5xl">
            <span className="texto-galaxia">Figuras de acción y accesorios icónicos.</span>
          </h1>
          <p className="mt-4 max-w-md text-hielo-300">
            Figuras hechas con materiales de alta calidad y con un diseño único.
          </p>
          <a
            href="#catalogo"
            className="boton-neon mt-8 inline-block rounded-full px-7 py-3 font-semibold"
          >
            Ver colección
          </a>
        </div>
        <div className="marco-galaxia flotar mx-auto w-full max-w-3xl">
          <Imagen
            src="/img/portada.jpg"
            alt="Portada de la colección FIGURAMA"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Portada
