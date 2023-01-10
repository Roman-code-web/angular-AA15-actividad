import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //1.declaro un variable
  listaPersonas=[{'nombre':'', 'apellidos':'', 'carrera':''}];
  constructor() { }
}
