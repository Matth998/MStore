import { BrandModel } from './BrandModel';
import { UserModel } from './UserModel';
export class ProductModel{

    id: number;
    name: string;
    price: number;
    promotion: number;
    quantity: number;
    category: string;
    img: string;
    user: UserModel;
    brand: BrandModel;

}