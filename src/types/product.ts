export type Product = {
    productId: number,
    name: string,
    status: | "In Stock"
    | "Out of Stock"
    | "Pending"
    | "In Transit"
    | "Discontinued",
    price: number,
    quantity: number,
    images: ProductImage[],
    description: string,
    discount?: number,
    createAt: string,
    brand: Brand,
    category: Category,
}

export type ProductImage = {
    imageId: number,
    productId: number,
    imageURL: string,
    position: number,
}

export type Category = {
    categoryId: number,
    name: string,
    description: string,
    createAt: string,
    updateAt: string
}

export type Brand = {
    brandId: number,
    name: string,
    description: string,
    createAt: string,
    updateAt: string
}