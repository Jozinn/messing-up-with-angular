import { Product } from "./product";

export interface ProductValueChange {
    product: Product;
    changeInQuantity: number;
}