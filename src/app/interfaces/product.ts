import { Category } from "../models/category";
import { Discount } from "../models/discount";
import { Product } from "../models/product";
import { Warehouse } from "../models/warehouse";

export class AddProductDTO{
    name: string = "";
    description: string = "";
    price: number = 0;
    images: Array<any> = [];
    categories: Array<string> = [];
}



export class ResponsePaginationProducts{
    products: Array<InfoProduct> = [];
    totalPages: number = 0;
    totalProducts: number = 0;
}

export interface InfoProduct{
    product: Product,
    discount: Discount,
    warehouse: Warehouse,
    categories: Array<Category>,
    numMedia: number
}

