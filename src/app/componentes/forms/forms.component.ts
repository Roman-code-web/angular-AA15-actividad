import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  tituloForm="Formulario de Registro";
  //1.Declaro variables
  nombre!:string;
  apellidos!:string;
  carrera:string="";
  listaRegistro:any=[]=[];

  //3.constructor para el data service
  constructor(public dataservices:DataService){};

  //2.funciona que agrega 
  agregarRegistro(){
    this.listaRegistro.push({'nombre': this.nombre, 'apellidos':this.apellidos,'carrera':this.carrera});
    this.dataservices.listaPersonas=this.listaRegistro;
  };
  ngOnInit(): void {
    //si esta vacio
    if(this.dataservices.listaPersonas.length==0 || this.dataservices.listaPersonas[0].nombre==''){
      this.dataservices.listaPersonas=this.listaRegistro;
      
    }else{
      //si tiene datos
      this.listaRegistro=this.dataservices.listaPersonas;
    }
    
  }
}
