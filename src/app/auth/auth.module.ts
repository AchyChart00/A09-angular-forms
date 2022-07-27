import { authRoutingModule } from "./auth-routing.module";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from "./pages/registro/registro.component";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
    declarations:[
        RegistroComponent, 
        LoginComponent
    ],
    imports:[
        authRoutingModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    exports:[]
})

export class authModule{

}