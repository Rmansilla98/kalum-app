import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenesAdmisionComponent } from './components/examenes-admision/examenes-admision.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExamenesAdmisionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class ExamenesAdmisionModule { }
