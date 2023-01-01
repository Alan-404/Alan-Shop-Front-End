import { Cart } from "../models/cart";
import { Discount } from "../models/discount";
import { Product } from "../models/product";
import { Warehouse } from "../models/warehouse";

export class AddCartDTO{
    productId: string = "";
    quantity: number = 0;
}

export interface CartProduct{
    cart: Cart,
    product: Product,
    discount: Discount,
    warehouse: Warehouse
}