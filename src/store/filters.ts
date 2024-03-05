import { create } from 'zustand'
import type { StateFilters } from '../types/filters'
import type { Property } from '../types/api'

export const useFiltersStore = create<StateFilters>((set, get) => {
    return {
        
        filters: {
            operacion: "todas las operaciones",
            inmueble: "todos los inmuebles",
            provincia: "todas las provincias",
            localidad: "todas las localidades",
            barrio: "todos los barrios"
        },

        //funcion para modificar el campo operacion
        changeFilterOperacion: (newOperacion: string) => {
            const { filters } = get()
            
            set({ 
                filters: {
                    operacion: newOperacion,
                    inmueble: filters.inmueble,
                    provincia: filters.provincia,
                    localidad: filters.localidad,
                    barrio: filters.barrio
                }
            })
        },

        //funcion para modificar el campo inmueble
        changeFilterInmueble: (newInmueble: string) => {
            const { filters } = get()
            set({ 
                filters: {
                    operacion: filters.operacion,
                    inmueble: newInmueble,
                    provincia: filters.provincia,
                    localidad: filters.localidad,
                    barrio: filters.barrio
                }
            })
        },

        //funcion para modificar el campo provincia
        changeFilterProvincia: (newProvincia: string) => {
            const { filters } = get()
            set({ 
                filters: {
                    operacion: filters.operacion,
                    inmueble: filters.inmueble,
                    provincia: newProvincia,
                    localidad: "todas las localidades",
                    barrio: "todos los barrios"
                }
            })
        },

        //funcion para modificar el campo localidad
        changeFilterLocalidad: (newLocalidad: string) => {
            const { filters } = get()
            set({ 
                filters: {
                    operacion: filters.operacion,
                    inmueble: filters.inmueble,
                    provincia: filters.provincia,
                    localidad: newLocalidad,
                    barrio: "todos los barrios"
                }
            })
        },

        //funcion para modificar el campo barrio
        changeFilterBarrio: (newBarrio: string) => {
            const { filters } = get()
            set({ 
                filters: {
                    operacion: filters.operacion,
                    inmueble: filters.inmueble,
                    provincia: filters.provincia,
                    localidad: filters.localidad,
                    barrio: newBarrio
                }
            })
        },

        limpiarFiltros: () => {
            set({
                filters: {
                operacion: "todas las operaciones",
                inmueble: "todos los inmuebles",
                provincia: "todas las provincias",
                localidad: "todas las localidades",
                barrio: "todos los barrios"
            }
            })
        },

        //funcion para filtrar provincias segun el estado de los filters
        filteredProvincias: (provincias:any[]) => {
            const { filters } = get();
            const provinciasUnicas = new Array;
            provincias.map(provincia => {
                if(!provinciasUnicas.includes(provincia.province.toLowerCase())){
                    provinciasUnicas.push(provincia.province.toLowerCase())
                }
            });
            
            return provinciasUnicas

        },
        


        filteredLocalidades: (localidades:any[]) => {
            const { filters } = get();
            const localidadesUnicas = new Array;
            const localidadesFiltradas = localidades.filter(localidad => {
                return (localidad.province.toLowerCase() == filters.provincia.toLowerCase() )
            });
            

            localidadesFiltradas.map(localidadFiltrada => {
                if(!localidadesUnicas.includes(localidadFiltrada.locality.toLowerCase())){
                    localidadesUnicas.push(localidadFiltrada.locality.toLowerCase())
                }
            });
           
            return localidadesUnicas
            
        },
        
        //funcion para filtrar barrios segun el estado de los filters
        filteredBarrios: (barrios:any[]) => {
            const { filters } = get();
            const barriosUnicos = new Array;
            const barriosFiltrados = barrios.filter(barrio => {
                return (barrio.locality.toLowerCase() == filters.localidad.toLowerCase() && barrio.province.toLowerCase() == filters.provincia.toLowerCase() )
                       
            });
            

            barriosFiltrados.map(barrioFiltrado => {
                if(!barriosUnicos.includes(barrioFiltrado.barrio.toLowerCase())){
                    barriosUnicos.push(barrioFiltrado.barrio.toLowerCase())
                }
            });
           
            return barriosUnicos
        },
        

        //funcion para filtrar propiedades segun el estado de los filters
        filteredProperties: (properties:Property[]) => {
            const { filters } = get();
            const propertiesFiltradas = properties.filter(property => {
                return (property.operation.toLowerCase() == filters.operacion.toLowerCase() || filters.operacion == 'todas las operaciones') &&
                       (property.type.toLowerCase() == filters.inmueble.toLowerCase() || filters.inmueble == 'todos los inmuebles') &&
                       (property.located.province.toLowerCase() == filters.provincia.toLowerCase() || filters.provincia == 'todas las provincias') &&
                       (property.located.locality.toLowerCase() == filters.localidad.toLowerCase() || filters.localidad == 'todas las localidades') &&
                       (property.located.district == filters.barrio|| filters.barrio == 'todos los barrios')
            });
            return propertiesFiltradas
        }
    }
})