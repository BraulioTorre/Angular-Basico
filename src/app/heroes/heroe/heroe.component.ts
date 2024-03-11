import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
})
export class HeroeComponet {
    nombre: string = 'Iron Man';
    edad  : Number = 23;

    get nombrecapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad}`;
    }

    cambairNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambairEdad(): void {
        this.edad = 100;
    }
}