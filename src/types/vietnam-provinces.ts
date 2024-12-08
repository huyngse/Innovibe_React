export type Ward = {
    code: number,
    codename: string,
    district_code: number,
    division_type: string,
    name: string
}

export type District = {
    code: number,
    codename: string,
    division_type: string,
    name: string,
    province_code: number,
    wards: Ward[]
}

export type Province = {
    code: number,
    codename: string,
    districts: District[],
    division_type: string,
    name: string,
    phone_code: number
}