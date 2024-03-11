import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nombre del componente para ponerlo en las templates
  templateUrl: './app.component.html',//url de la template que queremos mostrar
  styleUrls: ['./app.component.css'] // url de  el archivo ccs de estilos de esta app
})

export class AppComponent {
  titulo: string = 'Braulio es un animal';//esto es una propiedad
  numero: number = 10;
  base: number = 5;
  acumular( valor: number){
    this.numero+= valor;
  }
}
