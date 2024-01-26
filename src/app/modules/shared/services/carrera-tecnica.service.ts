import { Injectable } from '@angular/core';
import { CarreraTecnica } from '../../carreras-tecnicas/model/carrera-tecnica.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

const BASE_URL = `${environment.BASE_URL_KALUM_MANAGEMENT}/v1`


@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {

  constructor(private http: HttpClient) { }
  
  getCarreras(){
  
    return this.http.get(`${BASE_URL}/carreras-tecnicas`);
  }

  addCarreraTecnica(body: any){
    return this.http.post(`${BASE_URL}/carreras-tecnicas`,body);
  }

  updateCarreraTecnica(body: any){
    return this.http.put(`${BASE_URL}/carreras-tecnicas${body.carreraId}`,body);
 }

 deleteCarreraTecnica(carreraId: any){
  return this.http.delete(`${BASE_URL}/carreras-tecnicas/${carreraId}`);

 }
}