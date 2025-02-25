export type WardType = {
    Id: string,
    Name: string,
    Level: string
}

export type DistrictType = {
    Id: string,
    Name: string,
    Wards: Array<WardType | { Level: string }>;
}

export type CityType = {
    Id: string,
    Name: string,
    Districts: DistrictType[]
}

export function isWardType(value: any): value is WardType {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.Id === 'string' &&
        typeof value.Name === 'string' &&
        typeof value.Level === 'string'
    );
}