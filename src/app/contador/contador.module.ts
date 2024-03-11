import { NgModule } from "@angular/core";
import { ContadorComponets } from "./contador/conatdor.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ContadorComponets
    ],
    exports: [
        ContadorComponets
    ],
    imports: [
        CommonModule
    ],
})
export class ContadorModule{

}