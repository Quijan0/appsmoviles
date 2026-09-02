import { Component } from '@angular/core';
import { Incrementar } from './incrementar/incrementar';
import { Decrementar } from './decrementar/decrementar';
import { Reiniciar } from './reiniciar/reiniciar';
@Component({
 selector: 'app-contador',
 imports: [Incrementar, Decrementar,Reiniciar],
 templateUrl: './contador.html',
 styleUrl: './contador.css'
})
export class Contador {
 public contador: number = 10;
 public actualizarContador(nuevoValor: number): void {
 this.contador = nuevoValor;
 }
}