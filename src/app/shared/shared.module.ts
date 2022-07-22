import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SideMenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
    declarations:[SideMenuComponent],
    imports:[
        RouterModule,
        CommonModule
    ],
    //No debo olvidar exportar el componente para que pueda utilizar la etiqueta en el html
    exports:[SideMenuComponent]
})

export class SharedModule{

}