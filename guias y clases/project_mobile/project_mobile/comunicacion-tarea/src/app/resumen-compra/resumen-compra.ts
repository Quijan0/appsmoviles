import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [],
  templateUrl: './resumen-compra.html',
  styleUrl: './resumen-compra.css'
})
export class ResumenCompra{

  producto = input.required<{
    nombre: string;
    precio: number;
    cantidad: number;
  }>();

  cantidad = model.required<number>();

  aumentarCantidad(): void {
    this.cantidad.update(valor => valor + 1);
    
  }

  disminuirCantidad(): void {
    if (this.cantidad() > 1) {
      this.cantidad.update(valor => valor - 1);
    }
  }
  
  calcularTotal(): number {
    return this.producto().precio * this.cantidad();
}
}
  
  

