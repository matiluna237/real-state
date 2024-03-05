import { useFilters } from "../customHooks/useFilters.ts";
import data from "../data/properties.json";
import { Card } from "./Card.tsx";



export const ComponentePropiedades = () => {
    //console.log(data[0]);
    
    const { filters, filteredProperties } = useFilters()

    const propiedadesFiltradas = filteredProperties(data)
    //console.log(propiedadesFiltradas)
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {
            propiedadesFiltradas.map((propiedad) => <Card propiedad={propiedad}></Card>)
        }
        </div>
        </>
    )
 
}

