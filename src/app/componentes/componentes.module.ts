import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    TablaComponent,
    FormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TablaComponent,
    FormsComponent
  ]
})
export class ComponentesModule { }
