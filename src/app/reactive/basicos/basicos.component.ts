import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit{

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
      //Se puede utilizar serValue para establecer valores por defecto
      //el inconveniente es que cuando falta una propiedad puede hacer
      //que nuestra aplicación no funcione. 
      //this.miFormulario.setValue({

      //Reset es una opcion que tenemos que facilita un poco mejor
      //el establecimiento por defecto
      this.miFormulario.reset({
        nombre:"RTX 3060",
        precio:1600,
        //existencias:10
      })
  }

    /* miFormulario: FormGroup= new FormGroup({
    nombre: new FormControl("RX 6600"),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  }) */

  //Utilizando FormBuilder
  miFormulario:FormGroup = this.fb.group({
    //Si solo es un validador
    //[valor, validadores sincronos, validadores asincronos]
    //si son varios validadores se hace un arreglo de validadores
    //[valor, [validador1 sincrono, validador2], [validadores asincronos]]
    nombre: ["", [Validators.required,Validators.minLength(3)] ],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias:[0, [Validators.required, Validators.min(0)]]
  })

  campoEsValido(campo:string){
    
    /* return this.miFormulario.controls['nombre'].errors && 
    this.miFormulario.controls['nombre'].touched; */
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



  

}
