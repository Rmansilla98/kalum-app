import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/modules/usuarios/model/usuario.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: [
  ]
})
export class FormRegisterComponent implements OnInit {
  hide = true;
  public formRegister: FormGroup
  usuario: Usuario = new Usuario();//objeto se le asignara la informacion que se esta tomando del formulario 

  constructor(private formBuilder: FormBuilder, 
    private dialogRegisterRef: MatDialogRef<FormRegisterComponent>){
    this.formRegister = this.formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.required],
      normalizedUserName:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onCreate(){//metodo
    this.usuario.username = this.formRegister.get('username')?.value;
    this.usuario.email = this.formRegister.get('email')?.value;
    this.usuario.normalizedUserName = this.formRegister.get('normalizedUserName')?.value;
    this.usuario.password = this.formRegister.get('password')?.value;
    this.usuario.roles.push('ROLE_USER');// cada usuario que se creo por default tendran un role de user
    console.log(this.usuario);
  }

  onCancel (){
    this.dialogRegisterRef.close(2);
  }



  ngOnInit(): void {
    
  }

}
