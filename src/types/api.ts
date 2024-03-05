// Generated by https://quicktype.io

export interface Property {
    id:          string;
    title:       string;
    type:        string;
    description: string;
    thumbnail:   string;
    images:      string[];
    located:     Located;
    operation:   string;
    status:      string;
    price:       number;
    features:    Features;
}

export interface Features {
    bedrooms:  number;
    bathrooms: number;
    hall:      boolean;
    gallery:   boolean;
    laundry:   boolean;
    asador:    boolean;
    pool:      boolean;
    yard:      boolean;
    measures:  Measures;
}

export interface Measures {
    front: number;
    width: number;
}

export interface Located {
    province: string;
    locality: string;
    district:  string;
}
