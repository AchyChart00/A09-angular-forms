import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {NgModule} from "@angular/core";

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from "./template-routing.module";


@NgModule({
    declarations:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
    imports:[
        TemplateRoutingModule,
        CommonModule,
        //Para trabajar con template form debemos de importar este modulo
        FormsModule
    ],
    exports:[]
})

export class TemplateModule{

}