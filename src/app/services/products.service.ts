import { environment } from './../../environments/environment';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get(environment.BACKEND_URL + '/products').toPromise();
  }

}
