import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Balota } from './balota/balota'
import { Jugadores } from './jugadores/jugadores'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Balota, Jugadores],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  number1 = 0
  number2 = 0
  number3 = 0
  number4 = 0
  number5 = 0
  numberWin = ''

  numeroGanador = signal<string | null>(null)
  mostrarGanadores = signal(false)



  getNumberPlaying(): number {
    return Math.trunc(Math.random() * 10)
  }

  playLotery(): void {
    this.number1 = this.getNumberPlaying()
    this.number2 = this.getNumberPlaying()
    this.number3 = this.getNumberPlaying()
    this.number4 = this.getNumberPlaying()
    this.number5 = this.getNumberPlaying()

    const combinacion = `${this.number1}${this.number2}${this.number3}${this.number4}${this.number5}`
    this.numberWin = `El número ganador es: ${this.number1} ${this.number2} ${this.number3} ${this.number4} ${this.number5}`
    this.numeroGanador.set(combinacion)
    this.mostrarGanadores.set(false)
  }

  verificarGanadores(): void {
    if (this.numeroGanador() === null) return
    this.mostrarGanadores.set(true)
  }

  onGanadoresChange(ganadores: any[]): void {
    console.log('Ganadores detectados:', ganadores)
  }
}