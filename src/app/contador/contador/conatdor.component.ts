import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>Vamos a aplicar un acumulado de: <strong>{{base}}</strong></h3>
    <button (click)="acumular(+base)"> +{{base}} </button> <!-- Los eventos en angular se ponen con parentisis -->
    <span> {{numero}} </span>
    <button (click)="acumular(-base)"> -{{base}} </button>
    `
})
export class ContadorComponets{
  titulo: string = 'Braulio es un animal';//esto es una propiedad
  numero: number = 10;
  base: number = 5;
  acumular( valor: number){
    this.numero+= valor;
  }
}