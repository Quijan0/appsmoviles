import { Component, signal } from '@angular/core';
import { IncrementarComponent } from '../incrementar/incrementar';
import { DecrementarComponent } from '../decrementar/decrementar';
@Component({
 selector: 'app-contador',
 standalone: true,
 imports: [IncrementarComponent, DecrementarComponent],
 templateUrl: './contador.html',
 styleUrl: './contador.css'
})
export class ContadorComponent {
 contador = signal(0);
 actualizarContador(nuevoValor: number): void {
 this.contador.set(nuevoValor);
 }
}
