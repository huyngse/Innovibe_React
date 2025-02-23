export type Product = {
    id: number,
    productName: string,
    status: string,
    price: number,
    images: ProductImage[],
}

type ProductImage = {
    id: number,
    imageURL: string
}