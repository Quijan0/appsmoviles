import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css'
})
export class TarjetaProducto {

  producto = input.required<{
    nombre: string;
    precio: number;
    cantidad: number;
  }>();

  seleccionado = output<{
    nombre: string;
    precio: number;
    cantidad: number;
  }>();

  seleccionar(): void {
    this.seleccionado.emit(this.producto());
  }
}