import { Banner } from "../models/banner";

export class ResponseGetBanners{
    banners: Array<Banner> = [];
    totalPages: Number = 0;
}