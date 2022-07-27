import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{


  constructor(private fb:FormBuilder) { }

  miFormulario:FormGroup = this.fb.group({
    nombre:["", [Validators.required, Validators.minLength(3)]],
    //para indicar que voy a agregar una propiedad tipo array
    favoritos: this.fb.array([
      /* this.fb.control('', [], []) */
      ['Metal Gear', Validators.required],
      ['dead Stranding', Validators.required]
    ], Validators.required),
  })

  //nuevoFavorito:FormControl= new FormControl;
  nuevoFavorito:FormControl= this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
      );

        //Alternativa
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    
  }

  borrar(i:number){
    this.favoritosArr.removeAt(i);
  }

  guardar(){
    console.log(this.miFormulario)
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();

  }



}
