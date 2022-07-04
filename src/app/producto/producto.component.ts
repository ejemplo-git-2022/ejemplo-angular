import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProductoBuscar = 0;

  producto = {
    id: 123,
    nombre: 'Test 1',
    precio: 1200
  };

  productos : Array<any> = [{
    id: 123,
    nombre: 'Test 1',
    precio: 1200
  }];

  constructor(private productoService : ProductoService) { }

  eventoClickBuscarProducto() {
    this.productoService.getProducto(this.idProductoBuscar).subscribe(data => {
      this.producto = data;
    }, error => {
      console.log(error);
    });
  }

  eventoClickAgregarProducto() {
    this.productos.push({
      id: 234,
      nombre: 'Test 2',
      precio: 2334
    });
  }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

}
