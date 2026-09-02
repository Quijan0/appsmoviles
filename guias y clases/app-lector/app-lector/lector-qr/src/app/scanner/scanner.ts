import { Component } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [],
  templateUrl: './scanner.html',
  styleUrl: './scanner.css'
})
export class Scanner {

  resultado: string = '';
  tipo: string = '';
  escaneando: boolean = false;

  async escanear() {
    try {
      this.escaneando = true;
      this.resultado = '';
      this.tipo = '';

      const result = await CapacitorBarcodeScanner.scanBarcode({
          hint: 17,
          scanInstructions: 'Apunta la cámara al código',
          scanButton: true,
          scanText: 'Escanear',
          cameraDirection: 1
      });

      console.log('Resultado:', result);

      this.resultado = result.ScanResult;

    } catch (error) {
      console.error('Error al escanear:', error);
    } finally {
      this.escaneando = false;
    }
  }
}