import {NgModule} from "@angular/core";
//se importa debe de importar este paquete para trabajar con los reactive forms
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { ReactiveRoutingModule } from "./reactive-routing.module";
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
    declarations:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
    imports:[
        ReactiveRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[]
})

export class ReactiveModule{

}