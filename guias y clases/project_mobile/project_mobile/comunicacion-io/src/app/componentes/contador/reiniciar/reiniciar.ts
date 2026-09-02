import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-reiniciar',
  imports: [],
  templateUrl: './reiniciar.html',
  styleUrl: './reiniciar.css',
})
export class Reiniciar {

@Output()
public cambioContador: EventEmitter<number> = new EventEmitter<number>();

public reiniciar(): void {
    this.cambioContador.emit(0);
  }
}
