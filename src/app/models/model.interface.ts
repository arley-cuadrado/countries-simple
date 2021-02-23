export interface ContinentI {
    id: number;
    name: string;
}

export interface CountryI {
    id: number;
    continentId: number;
    name: string;
    borders: string;
    region: string;
    population: string;
    currency: string;
    language: string;
    flag: string;
}