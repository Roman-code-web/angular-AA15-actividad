import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RegistrosComponent } from './registros/registros.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PagesModule { }
