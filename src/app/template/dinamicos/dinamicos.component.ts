import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos: Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{

  nuevoJuego:string="";

  persona:Persona={
    nombre:"Fernando",
    favoritos:[
      {
      id:1,
      nombre:"Metal Gear"
      },
      {
        id:2,
        nombre:"Death Stranding"
      }
    ]
  }

  @ViewChild("miFormulario") miFormulario!:NgForm;

  nombreValido(){

    return this.miFormulario?.form.controls["nombre"]?.invalid 
    && this.miFormulario?.form.controls["nombre"].touched;
    
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }
  
  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego="";
  }

  guardar(){
    if(this.miFormulario.form.controls["nombre"].value){
      console.log("nombre valido",this.miFormulario);
    }else{
      console.log("Entrada Vacia")
    }
    
  }

}
