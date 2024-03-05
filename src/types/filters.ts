import type { Property } from "./api";

export interface Filter {
    operacion: string,
    inmueble: string;
    provincia: string;
    localidad: string;
    barrio: string;
}


export interface StateFilters {
    filters: Filter
    changeFilterOperacion: (newOperacion: string) => void;
    changeFilterInmueble: (newInmueble: string) => void;
    changeFilterProvincia: (newProvincia: string) => void;
    changeFilterLocalidad: (newLocalidad: string) => void;
    changeFilterBarrio: (newBarrio: string) => void;
    filteredProperties: (properties: Property[]) => Property[];
    limpiarFiltros: () => void;
    filteredBarrios: (barrios:any) => any[];
    filteredLocalidades: (localidades:any) => any[];
    filteredProvincias: (provincias:any) => any[];
}

