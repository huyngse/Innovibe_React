export type Product = {
    id: number,
    productName: string,
    status: string,
    price: number,
    images: ProductImage[],
    description: string,
    averateRating: number,
    salesPrice?: number,
}

type ProductImage = {
    id: number,
    imageUrl: string,
    isPrimary: boolean,
}