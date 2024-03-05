import data from "../data/properties.json";


export const getAllProperties = () => {
    return data
} 

export const getPropertyById = ({id}: {id:string}) => {
    const property = data.find((property) => property.id == id )
    return property
}