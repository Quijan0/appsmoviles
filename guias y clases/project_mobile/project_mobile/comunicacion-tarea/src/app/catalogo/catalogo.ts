import { Component, signal } from '@angular/core';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { ResumenCompra } from '../resumen-compra/resumen-compra';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [TarjetaProducto, ResumenCompra],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {

  productos = signal([
    {
      nombre: 'Teclado',
      precio: 80000,
      cantidad: 1
    },
    {
      nombre: 'Mouse',
      precio: 50000,
      cantidad: 1
    },
    {
      nombre: 'Audífonos',
      precio: 120000,
      cantidad: 1
    }
  ]);

  productoSeleccionado = signal({
    nombre: 'Ningún producto seleccionado',
    precio: 0,
    cantidad: 1
  });

  cantidad = signal(1);

  seleccionarProducto(producto: {
    nombre: string;
    precio: number;
    cantidad: number;
  }): void {
    this.productoSeleccionado.set(producto);
    this.cantidad.set(1);
  }
}