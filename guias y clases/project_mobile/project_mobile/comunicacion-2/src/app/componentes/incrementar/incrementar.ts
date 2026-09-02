import { Component, input, output } from '@angular/core';
@Component({
 selector: 'app-incrementar',
 standalone: true,
 templateUrl: './incrementar.html'
})
export class IncrementarComponent {
 valor = input.required<number>();
 valorCambiado = output<number>();
 incrementar(): void {
 this.valorCambiado.emit(this.valor() + 1);
 }
}