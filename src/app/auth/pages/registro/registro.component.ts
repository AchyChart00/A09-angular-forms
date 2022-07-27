import {Component, OnInit} from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from "src/app/shared/validator/email-validator.service";
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
    selector:"app-pages-component",
    templateUrl:"./registro.component.html"
})

export class RegistroComponent implements  OnInit {
    
    miFormulario:FormGroup= this.fb.group({
        nombre:["", [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
        //Validators incorpora una función para los emails pero no es segura
        //email:["", [Validators.required, Validators.email]]
        email:["", [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
        username:["", [Validators.required, this.vs.noPuedeserStrider] ],
        password:["", [Validators.required,  Validators.minLength(6)]],
        password2:["", [Validators.required] ]
    },
    {
        validators:[this.vs.camposIguales('password', 'password2')]
    }
    )

    //validaciones
    get emailErrorMsg():string{
        const errors= this.miFormulario.get('email')?.errors;

        if(errors?.['required']){
            return "Email es obligatorio";
        }else if(errors?.['pattern']){
            return 'El valor ingresado no tiene formato de correo'
        }else if(errors?.['emailTomado']){
            return "El email ya fue tomado por otro usuario"
        }

        return "";

    }

    constructor(
        private fb:FormBuilder,
        private vs:ValidatorService,
        private emailValidator:EmailValidatorService
        ){

    }

    ngOnInit(){
        this.miFormulario.reset({
            nombre:"Jacob Sanchez",
            email:"test1@test.com",
            username:"AchyChart00",
            password:'123456',
            password2:'123456'
        })
    }

    campoNoValido(campo:string){
        return this.miFormulario.get(campo)?.invalid
                && this.miFormulario.get(campo)?.touched;
    }

    submitFormulario(){
        console.log(this.miFormulario.value);

        this.miFormulario.markAllAsTouched();
    }

  
    
}