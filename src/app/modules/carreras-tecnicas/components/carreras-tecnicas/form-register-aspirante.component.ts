import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarreraTecnica } from '../../model/carrera-tecnica.model';
import { CarreraTecnicaService } from 'src/app/modules/shared/services/carrera-tecnica.service';

@Component({
  selector: 'app-form-register-aspirante',
  templateUrl: './form-register-aspirante.component.html',
  styles: []
})
export class FormRegisterAspiranteComponent implements OnInit {

  public formRegisterAspirante: FormGroup;

  carrerasTecnicas: CarreraTecnica[] = [];

  constructor(private formBuilder: FormBuilder, private carreraTecnicaService: CarreraTecnicaService){
    this.formRegisterAspirante = this.formBuilder.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      carreraId: ['', Validators.required]

    })
  }

  ngOnInit(): void {
      
  }

  getCarrerasTecnicas(){
    this.carreraTecnicaService.getCarreras().subscribe((data:any) => {
      this.carrerasTecnicas = data;
    }, (error: any) => {
      console.log(error);
    })
  }

}
