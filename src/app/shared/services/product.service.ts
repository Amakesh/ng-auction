import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


export interface Product {

  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}  //Wstrzykuje obiekt HttpClient.

  getAll(): Observable<Product[]> { //Ta funkcja deklaruje obiekt Observable,który może zwracać wszystkie obiekty Product.
    return this.http.get<Product[]>('/data/products.json');
  }

  getById(productId: number): Observable<Product> { //Ta funkcja deklaruje obiekt Observable, który może zwraca produkty według identyfikatora.
    return this.http.get<Product[]>('/data/products.json')
      .pipe(
        map(products => <Product>products.find(p => p.id === productId)) //Funkcja map() znajduje identyfikator produktu,który odpowiada argumentowi funkcji.
      );
  }
}
