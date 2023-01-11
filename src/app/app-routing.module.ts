import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrosComponent } from './pages/registros/registros.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"registros", component:RegistrosComponent},
  {path:"**", pathMatch:"full", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
