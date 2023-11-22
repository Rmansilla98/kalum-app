import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarreraTecnicaService } from 'src/app/modules/shared/services/carrera-tecnica.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-carrera-tecnica',
  templateUrl: './form-carrera-tecnica.component.html',
  styles: [
  ]
})
export class FormCarreraTecnicaComponent implements OnInit {


  public carreraTecnicaFormGroup: FormGroup;



  constructor(private formBuilder: FormBuilder, private carreraTecnicaService: CarreraTecnicaService,
    private dialogRef: MatDialogRef<FormCarreraTecnicaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.carreraTecnicaFormGroup = this.formBuilder.group({
      nombre: [data != null ? data.nombre : '', Validators.required]
    })

  }

  ngOnInit(): void {

  }

  onSave() {
    let dataForm = {
      nombre: this.carreraTecnicaFormGroup.get('nombre')?.value,
    }

    if (this.data != null) {
      this.carreraTecnicaService.updateCarreraTecnica({ carreraId: this.data.carreraId, nombre: dataForm.nombre }).subscribe({
        next: (data: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Carreras Técnicas',
            text: `Se actuali correctamente la carrera ${dataForm.nombre}`,
            footer: '<a href="">kalum-app v1.0.0</a>'
          }).then(result => {
            if (result.isConfirmed) {
              this.dialogRef.close(2);
            }
          })
        },
        error: (error) => {
          if (error.status == 404 || error.status == 503) {
            Swal.fire({
              icon: 'error',
              title: 'Carreras Técnicas',
              text: `No fue posible actualizar la información valide la información`,
              footer: '<a href="">kalum-app v1.0.0</a>'
            }).then(result => {
              if (result.isConfirmed) {
                this.dialogRef.close(1);
              }
            })
          }
          this.dialogRef.close(2);
        },
        complete: () => console.log('proceso finalizado')
        })
        } else {
          this.carreraTecnicaService.addCarreraTecnica(dataForm).subscribe((response: any) => {
            alert(JSON.stringify(response));
            if (response.httpStatusCode) {
              if ((response.httpStatusCode == 503 || response.httpStatusCode == 500))
                Swal.fire({
                  icon: 'success',
                  title: 'Carreras Técnicas',
                  text: `Existe un error al consumir los servicios, contacte al administrador del sistema`,
                  footer: '<a href="">kalum-app v1.0.0</a>'
                }).then(result => {
                  if (result.isConfirmed) {
                    this.dialogRef.close(3);
                  }
                })


            } else {
              Swal.fire({
                icon: 'success',
                title: 'Carreras Técnicas',
                text: `Se agrego correctamente la carrera ${response.nombre}`,
                footer: '<a href="">kalum-app v1.0.0</a>'
              }).then(result => {
                if (result.isConfirmed) {
                  this.dialogRef.close(1);
                }
              })
            }
          });
        }


      }
  onCancel() {
        this.dialogRef.close(2);
      }

}
