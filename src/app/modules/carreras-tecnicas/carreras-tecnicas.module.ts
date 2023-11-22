import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasTecnicasComponent } from './components/carreras-tecnicas/carreras-tecnicas.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCarreraTecnicaComponent } from './components/carreras-tecnicas/form-carrera-tecnica.component';



@NgModule({
  declarations: [
    CarrerasTecnicasComponent,
    FormCarreraTecnicaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarrerasTecnicasModule { }
