import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  numeroUno = 0;
  numeroDos = 0;

  promedio = 0;
  suma = 0;

  calcular()
  {
    this.suma = parseInt(this.numeroUno.toString()) + parseInt(this.numeroDos.toString());
    this.promedio = this.suma / 2;
  }

  limpiar()
  {
    this.numeroUno = 0;
    this.numeroDos = 0;
    
    this.promedio = 0;
    this.suma = 0;
  }
}
