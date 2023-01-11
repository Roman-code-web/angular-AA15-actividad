import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent   {
  
  //1. declaro el constructor del dataService
  constructor(public dataservices:DataService){}
  //2.elimina el registro
  eliminarRegistro(i:number,nombre:string){
    console.log(i,nombre);
   //3.alerta confirmacion
   Swal.fire({
    title: 'Estas seguro de eliminar este registro',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Porfavor!'
    }).then((result) => {
      if (result.isConfirmed) {
        //4.con splice eliminamos el registro
        this.dataservices.listaPersonas.splice(i,1) ; 
        //alerta de confirmacion
        Swal.fire({
          title: 'Registro Eliminado',
          icon: 'success'
        })
      }
    })
  
  }
}
