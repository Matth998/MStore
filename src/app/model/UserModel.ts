import { ProductModel } from './ProductModel';

export class UserModel{

    id: number;
    name: string;
    email: string;
    password: string;
    photo: string;
    type: string;
    product: ProductModel[];

}