import type { Property } from "../types/api"


export const Card = ({propiedad}:{propiedad:Property}) => {

  // Truncar el título si es mayor a 58 caracteres y agregar puntos suspensivos
  const trunctedTitle = (title: string) => {
    return title.length > 58 ? title.substring(0, 58).toUpperCase() + '...' 
                             : title.toUpperCase()
  }

  return (
    <a href={`/propiedad/${propiedad.id}`} className="relative flex flex-col rounded-xl overflow-hidden hover:cursor-pointer">
      <div
        className="absolute z-10 bottom-0 left-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-30% to-70% via-black/50 to-black/10"
      >
      </div>

      <span
        className="absolute top-0 m-2 px-2 text-white z-10 bg-slate-500 rounded-full"
        >{propiedad.operation}</span>
      <picture>
        <img
          src={propiedad.thumbnail}
          alt=""
          className="h-48 w-full object-fill object-center"
        />
      </picture>

      <span className="absolute bottom-24 py-1 px-2 text-xl text-white font-bold z-10"
        >USD {propiedad.price}</span>

      <div className="flex flex-col h-24 py-1 justify-center">
        <h1 className="text-xl text-center uppercase">
          {trunctedTitle(propiedad.title)}
        </h1>
      </div>
  </a>
  )
}

