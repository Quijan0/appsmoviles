import { Component, input, output } from '@angular/core';
@Component({
 selector: 'app-decrementar',
 standalone: true,
 templateUrl: './decrementar.html'
})
export class DecrementarComponent {
 valor = input.required<number>();
 valorCambiado = output<number>();
 decrementar(): void {
 this.valorCambiado.emit(this.valor() - 1);
 }
}
