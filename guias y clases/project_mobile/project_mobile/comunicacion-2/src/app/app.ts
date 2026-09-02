import { Component } from '@angular/core';
import { ContadorComponent } from './componentes/contador/contador';
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [ContadorComponent],
 template: '<app-contador />'
})
export class App {}
