import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasTecnicasComponent } from './components/carreras-tecnicas/carreras-tecnicas.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarrerasTecnicasComponent
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
