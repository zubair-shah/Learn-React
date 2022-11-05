export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

interface Location {
    city: string,
    country: string
}

export interface Pet  {
    id: number,
    name: string,
    animals: Animal,
    breed: string,
    description: string,
    images: string[],
    city: string,
    state: string,
    location:Location
}

export interface PetAPIResponse{
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: number;
    pets: Pet[];
}
export interface BreedListAPIResponse{
    animal: Animal;
    breeds: string[];
}