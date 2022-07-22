import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  //Sirve para seleccionar un elemento de nuestro html
  //En este caso mi formulario
  @ViewChild("miFormulario") miFormulario!: NgForm;

  //Forma de inicializar valores por defecto en el formulario manejando ngForm
  initForm={
    producto:'RX 6600XT',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.form.controls["producto"]?.invalid 
    && this.miFormulario?.form.controls["producto"]?.touched;
  }

  precioValido():boolean{
    this.miFormulario?.form?.controls["precio"]?.setErrors(null);
    return this.miFormulario?.form.controls["precio"]?.value < 0 
    && this.miFormulario?.form.controls["precio"]?.touched;
  }

  /* guardar(miFormulario:NgForm) */
  guardar(){
    console.log(this.miFormulario);
    //this.precioValido();

    //Alguna alternativa
    if(this.miFormulario.form.controls["precio"].value<0){
      console.log("No posteado");
      return;
    }

    //Con esto reinicio o borro el formulario
    this.miFormulario.resetForm({
      producto:"algo",
      precio:0,
      existencias:0
    });

  }

}
