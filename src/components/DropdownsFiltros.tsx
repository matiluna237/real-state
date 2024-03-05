
import { useEffect, useState } from "react"
import { ArrowDown } from "./icons/ArrowDown";
import { useFilters } from "../customHooks/useFilters";
import { FiltersIcon } from "./icons/FiltersIcon";
import { LocatedIcon } from "./icons/LocatedIcon";
import { MapIcon } from "./icons/MapIcon";
import { ProvinceIcon } from "./icons/ProvinceIcon";
import { InmuebleIcon } from "./icons/InmuebleIcon";
import { OperationIcon } from "./icons/OperationIcon";
import { LimpiarFiltrosIcon } from "./icons/LimpiarFiltrosIcon";





export const DropdownFiltros = () => {


  const [toggleOperacion, setToggleOperacion] = useState<boolean>(false)
  const [toggleInmueble, setToggleInmueble] = useState<boolean>(false)
  const [toggleProvincia, setToggleProvincia] = useState<boolean>(false)
  const [toggleLocalidad, setToggleLocalidad] = useState<boolean>(false)
  const [toggleBarrio, setToggleBarrio] = useState<boolean>(false)


  const toggleDropdownButtonOperacion = () => {
      setToggleOperacion(!toggleOperacion);
  };
  const toggleDropdownButtonInmueble = () => {
      setToggleInmueble(!toggleInmueble);
  };
  const toggleDropdownButtonProvincia = () => {
      setToggleProvincia(!toggleProvincia);
  };
  const toggleDropdownButtonLocalidad = () => {
    setToggleLocalidad(!toggleLocalidad);
  };
  const toggleDropdownButtonBarrio = () => {
    setToggleBarrio(!toggleBarrio);
  };





  const {filters,
          changeFilterOperacion,
          changeFilterInmueble, 
          changeFilterProvincia,
          changeFilterLocalidad,
          changeFilterBarrio,
          limpiarFiltros,
          filteredBarrios,
          filteredLocalidades,
          filteredProvincias } = useFilters();

  const handleItemOperacionFilter = ((item:string) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un elemento del menú
    console.log(item);
    changeFilterOperacion(item)
    
    // También puedes cerrar el menú después de hacer clic si lo deseas
    toggleDropdownButtonOperacion()
  });

  const handleItemInmuebleFilter = ((item:string) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un elemento del menú
    console.log(`Clic en ${item}`);
    changeFilterInmueble(item)
    
    // También puedes cerrar el menú después de hacer clic si lo deseas
    toggleDropdownButtonInmueble()
  });

  const handleItemProvinciaFilter = ((item:string) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un elemento del menú
    console.log(`Clic en ${item}`);
    changeFilterProvincia(item)
    
    // También puedes cerrar el menú después de hacer clic si lo deseas
    toggleDropdownButtonProvincia()
  });

  const handleItemLocalidadFilter = ((item:string) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un elemento del menú
    console.log(`Clic en ${item}`);
    changeFilterLocalidad(item)
    
    // También puedes cerrar el menú después de hacer clic si lo deseas
    toggleDropdownButtonLocalidad()
  });

  const handleItemBarrioFilter = ((item:string) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un elemento del menú
    console.log(`Clic en ${item}`);
    changeFilterBarrio(item)
    
    // También puedes cerrar el menú después de hacer clic si lo deseas
    toggleDropdownButtonBarrio()
  });

    
    
   



  const dropdownListOperacion = [
    "todas las operaciones",
    "venta",
    "alquiler"
  ];

  const dropdownListInmueble = [
    "todos los inmuebles",
    "casa",
    "terreno",
    "departamento"
  ];


  const dropdownListUbicacion = [
    {province: "todas las provincias", locality: "todas las localidades", barrio: "todos los barrios"},
    {province: "santiago del estero", locality: "todas las localidades", barrio: "todos los barrios"},
    {province: "santiago del estero", locality: "capital", barrio: "cabildo"},
    {province: "santiago del estero", locality: "capital", barrio: "centro"},
    {province: "santiago del estero", locality: "capital", barrio: "belgrano"},
    {province: "santiago del estero", locality: "la banda", barrio: "santa clara"},
    {province: "santiago del estero", locality: "la banda", barrio: "san antonio"},
    {province: "cordoba", locality: "todas las localidades", barrio: "todos los barrios"},
    {province: "cordoba", locality: "capital", barrio: "nueva cordoba"},
    {province: "cordoba", locality: "capital", barrio: "alberdi"},
  ];

  const provinciasFiltradas = filteredProvincias(dropdownListUbicacion)
  const localidadesFiltradas = filteredLocalidades(dropdownListUbicacion)
  const barriosFiltrados = filteredBarrios(dropdownListUbicacion)

  // Función para detectar el ancho de la pantalla y ajustar el estado de los filtros
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setToggleFiltros(true); // Mostrar filtros en pantallas grandes
    } else {
      setToggleFiltros(false); // Ocultar filtros en pantallas pequeñas
    }
  };
  
  // Ejecutar la función de detección de tamaño al cargar la página
  useEffect(() => {
    handleResize();
    // Agregar un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);
    // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    
  const [toggleFiltros, setToggleFiltros] = useState(false);
  const valor = toggleFiltros ? 'Ocultar Filtros' : 'Mostrar Filtros'

  return (
    <>
    <div className="flex flex-row justify-center gap-4">
      { toggleFiltros &&
        <button onClick={limpiarFiltros} className="flex flex-row justify-center gap-1">
            <LimpiarFiltrosIcon classes="size-6 text-purple-500"></LimpiarFiltrosIcon>
            <span className="text-purple-500">Limpiar Filtros</span>
        </button>
      }
      <button onClick={() => setToggleFiltros(!toggleFiltros)} className="flex flex-row justify-center gap-1">
          <FiltersIcon classes="size-6 text-sky-500"></FiltersIcon>
          <span className="text-sky-500">{valor}</span>
      </button>


    </div>
    

    <div className={`flex flex-wrap justify-center md:flex-row gap-2 ${toggleFiltros ? 'opacity-100' : 'opacity-0 hidden'}`}>
      {toggleFiltros && 
      <>
      <div className="relative">
        <div>
          <div className="flex flex-row items-center gap-1">
            <OperationIcon classes="size-5"></OperationIcon>
            <label className="font-semibold ">Tipo Operación</label>
          </div>
          
          <button onClick={toggleDropdownButtonOperacion} type="button" id="operacion" className="flex flex-row justify-between w-52 items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200">
          {filters.operacion|| dropdownListOperacion[0]}
          <ArrowDown classes="size-6"></ArrowDown>
        </button>
        </div>


        {toggleOperacion && (
          <nav className="z-10 justify-center origin-top-right absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                dropdownListOperacion.map(listItem => 
                  <div onClick={() => handleItemOperacionFilter(listItem)} key="operacion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" role="menuitem">{listItem}</div>
                )
              }
            </div>
          </nav>
        )}
      </div>


      <div className="relative">
        <div>
          <div className="flex flex-row gap-1">
            <InmuebleIcon classes="size-5"></InmuebleIcon>
            <label className="font-semibold">Tipo Inmueble</label>
          </div>
          
          <button onClick={toggleDropdownButtonInmueble} type="button" id="inmueble" className="flex flex-row justify-between w-52 items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200">
          {filters.inmueble || dropdownListInmueble[0]}
          <ArrowDown classes="size-6"></ArrowDown>
        </button>
        </div>


        {toggleInmueble && (
          <nav className="z-10 justify-center origin-top-right absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                dropdownListInmueble.map(listItem => 
                  <div onClick={() => handleItemInmuebleFilter(listItem)} key="inmueble" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" role="menuitem">{listItem}</div>
                )
              }
            </div>
          </nav>
        )}
      </div>


      <div className="relative">
        <div>
          <div className="flex flex-row gap-1">
            <ProvinceIcon classes="size-5"></ProvinceIcon>
            <label className="font-semibold">Provincia</label>
          </div>
          
          <button onClick={toggleDropdownButtonProvincia} type="button" id="provincia" className="flex flex-row justify-between w-52 items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200">
            {filters.provincia || provinciasFiltradas[0].province}
            <ArrowDown classes="size-6"></ArrowDown>
          </button>

        </div>


        {toggleProvincia && (
          <nav className="z-10 justify-center origin-top-right absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                provinciasFiltradas.map(listItem => 
                  <div onClick={() => handleItemProvinciaFilter(listItem)} key="provincia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" role="menuitem">{listItem}</div>
                )
              }
            </div>
          </nav>
        )}
      </div>
    


    <div className="relative">
        <div>
          <div className="flex flex-row gap-1">
            <MapIcon classes="size-5"></MapIcon>
            <label className="font-semibold">Localidad</label>
          </div>
          
          <button onClick={toggleDropdownButtonLocalidad} type="button" id="localidad" className="flex flex-row justify-between w-52 items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200">
            {filters.localidad || localidadesFiltradas[0].locality}
            <ArrowDown classes="size-6"></ArrowDown>
          </button>
        </div>  

        {toggleLocalidad && (
          <nav className="z-10 justify-center origin-top-right absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                localidadesFiltradas.map(listItem => 
                  <div onClick={() => handleItemLocalidadFilter(listItem)} key="localidad" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" role="menuitem">{listItem}</div>
                )
              }
            </div>
          </nav>
        )}
    </div>

    <div className="relative">
        <div>
          <div className="flex flex-row gap-1">
            <LocatedIcon classes="size-5"></LocatedIcon>
            <label className="font-semibold">Barrio</label>
          </div>
          <button onClick={toggleDropdownButtonBarrio} type="button" id="barrio" className="flex flex-row justify-between w-52 items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200">
            {filters.barrio || barriosFiltrados[0].barrio}
            <ArrowDown classes="size-6"></ArrowDown>
          </button>
        </div>

        {toggleBarrio && (
          <nav className="z-10 justify-center origin-top-right absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                barriosFiltrados.map(listItem => 
                  <div onClick={() => handleItemBarrioFilter(listItem)} key="barrio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" role="menuitem">{listItem}</div>
                )
              }
            </div>
          </nav>
        )}
        

    </div>


</>

}

  </div>
   

</>
    
  );

}
