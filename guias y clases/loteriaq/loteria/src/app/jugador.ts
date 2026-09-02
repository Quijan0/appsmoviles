export class Jugador {
  constructor(
    public nombres: string,
    public apellidos: string,
    public numeroJugado: string
  ) {}

  nombreCompleto(): string {
    return `${this.nombres} ${this.apellidos}`
  }

  esGanador(numeroGanador: string): boolean {
    return this.numeroJugado === numeroGanador
  }
}
