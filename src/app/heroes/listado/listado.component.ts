import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent  {
  heroesss : string[] = ['Spiderman','Hulk','Iron Man','Thor'];
  heroeBorrado: string = '';

  borarHeroe(): void{
    this.heroeBorrado = this.heroesss.shift() || '';
  }
}
