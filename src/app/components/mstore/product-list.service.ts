import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from './product-list/model/store';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = 'http://localhost:3100/api/courses'

  constructor(private http: HttpClient) { }

  getProduct() {

    return this.http.get(this.url)

  }

}
