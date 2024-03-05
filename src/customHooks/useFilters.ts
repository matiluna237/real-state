import { useFiltersStore } from "../store/filters";



export function useFilters () {
    const filters = useFiltersStore(state => state.filters)
    const changeFilterOperacion = useFiltersStore(state => state.changeFilterOperacion)
    const changeFilterInmueble = useFiltersStore(state => state.changeFilterInmueble)
    const changeFilterProvincia = useFiltersStore(state => state.changeFilterProvincia)
    const changeFilterLocalidad = useFiltersStore(state => state.changeFilterLocalidad)
    const changeFilterBarrio = useFiltersStore(state => state.changeFilterBarrio)
    const filteredProperties = useFiltersStore(state => state.filteredProperties)
    const limpiarFiltros = useFiltersStore(state => state.limpiarFiltros)
    const filteredBarrios = useFiltersStore(state => state.filteredBarrios)
    const filteredLocalidades= useFiltersStore(state => state.filteredLocalidades)
    const filteredProvincias= useFiltersStore(state => state.filteredProvincias)

    return {
        filters,
        changeFilterOperacion,
        changeFilterInmueble,
        changeFilterProvincia,
        changeFilterLocalidad,
        changeFilterBarrio,
        filteredProperties,
        limpiarFiltros,
        filteredBarrios,
        filteredLocalidades,
        filteredProvincias
    }
}