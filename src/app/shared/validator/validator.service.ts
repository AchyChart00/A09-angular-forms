import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern:string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  
  noPuedeserStrider(control:FormControl):ValidationErrors | null{
  const valor: string = control.value?.trim().toLowerCase();
  
  if(valor==='strider'){
      //ERROR
      return {
          noStrider:true
      }
  }

  //se retorna null cuando no hay error absoluto
  return null;
}

  camposIguales(campo1:string, campo2:string){
    return (formGroup:AbstractControl):ValidationErrors | null=>{
      
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      if(pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({ noIguales:true });
        return{ noIguales:true }
      }



      //retorna null si no hay error
      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }

}
