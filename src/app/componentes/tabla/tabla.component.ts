import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent   {

  //1. declaro el constructor del dataService
  constructor(public dataservices:DataService){}
  //2.elimina el registro
  eliminarRegistro(i:number){
  this.dataservices.listaPersonas.splice(i,1) ; 
  }
}
