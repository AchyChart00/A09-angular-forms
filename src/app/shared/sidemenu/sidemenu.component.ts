import {Component} from "@angular/core";

interface MenuItem{
    texto:string;
    ruta:string;

}

@Component({
    templateUrl:"./sidemenu.component.html",
    selector:"app-sidebar-menu",
    styles:[
        `
        li{
            cursor:pointer;
        }
        `
    ]
})

export class SideMenuComponent{

    templateMenu:MenuItem[]=[
        {
            texto:"Básicos",
            ruta:"./template/basicos"
        },
        {
            texto:"Dinámicos",
            ruta:"./template/dinamicos"
        },
        {
            texto:"Switches",
            ruta:"./template/switches"
        }
    ];


    reactive:MenuItem[]=[
        {
            texto:"Básicos",
            ruta:"./reactive/basicos"
        },
        {
            texto:"Dinámicos",
            ruta:"./reactive/dinamicos"
        },
        {
            texto:"Switches",
            ruta:"./reactive/switches"
        }
    ]

}