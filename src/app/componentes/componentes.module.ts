import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TablaComponent,
    FormsComponent
  ]
})
export class ComponentesModule { }
