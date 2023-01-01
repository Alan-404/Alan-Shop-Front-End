import { Bill } from "../models/bill";
import { Order } from "../models/order";
import { User } from "../models/user";

export class InfoBill{
    bill: Bill = new Bill();
    user: User = new User();
    orders: Array<Order> = [];
}

export class PaginationBills{
    bills: Array<InfoBill> = [];
    totalPages: number = 0;
    totalBills: number = 0;

}