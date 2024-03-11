import { NgModule } from '@angular/core';
import { HeroeComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HeroeComponet,      //Componentes que van a estar presente  en este modulo;
        ListadoComponent
    ],
    exports: [ // Son las cosas que quiero hacer publicas o visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [ // En los imports van solo modulos 
        CommonModule //Esto me permite utilizar el ngif y el ngfor entrr otaas cosas
    ]
})
export class HeroesModule{

}