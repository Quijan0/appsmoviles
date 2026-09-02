import { Component } from '@angular/core';
import { Scanner } from './scanner/scanner';

@Component({
  selector: 'app-root',
  imports: [Scanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}