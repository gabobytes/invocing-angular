import { Observable, observable } from "rxjs";
import { Product } from "../product";

export abstract class ProductGateway {
    abstract getProducts(): Observable<Array<Product>>;
    abstract getProduct(id:String): Observable<Product>;
    abstract insertProduct(_product: Product):Observable<void>;
}