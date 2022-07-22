import {NgModule} from "@angular/core";
import { ReactiveRoutingModule } from "./reactive-routing.module";
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
    declarations:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
    imports:[
        ReactiveRoutingModule,
        CommonModule
    ],
    exports:[]
})

export class ReactiveModule{

}