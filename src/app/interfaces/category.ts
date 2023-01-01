import { Category } from "../models/category";

export class AddCategoryDTO{
    name: string = "";
    file: any;
}

export interface ResponseGetCategories{
    categories: Array<Category>,
    totalPage: number,
    totalCategories: number
}

export class EditCategoryDTO{
    id: string = '';
    name: string = "";
    file: any;
}