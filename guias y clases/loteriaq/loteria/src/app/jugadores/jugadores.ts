import { Component, input, signal } from '@angular/core'
import { Jugador } from '../jugador'

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.html',
  styleUrl: './jugadores.css',
})
export class Jugadores {
  jugadores = signal<Jugador[]>([
    new Jugador('Ana', 'García', '12345'),
    new Jugador('Luis', 'Pérez', '67890'),
    new Jugador('María', 'López', '11111'),
    new Jugador('Carlos', 'Ramírez', '54321'),
  ])

  numeroGanador = input<string | null>(null)
  mostrar = input<boolean>(false)

  obtenerGanadores(): Jugador[] {
    const numero = this.numeroGanador()

    if (!numero) return []

    return this.jugadores().filter(
      (jugador) => jugador.esGanador(numero)
    )
  }
}
