import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) { }

  getProductos() {
    return this.http.get<Array<any>>('http://localhost:8080/api/productos');
  }

  getProducto(id : Number) {
    return this.http.get<any>('http://localhost:8080/api/productos/' + id);
  }
}
