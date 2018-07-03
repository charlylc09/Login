import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion de componentes
import {HomePageComponent} from '../app/componentes/home-page/home-page.component';
import {RegisterPageComponent} from '../app/componentes/register-page/register-page.component';
import {PrivadoPageComponent} from '../app/componentes/privado-page/privado-page.component';
import {ErrorPageComponent} from '../app/componentes/error-page/error-page.component';

import {AuthGuard} from '../app/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registrar', component: RegisterPageComponent, canActivate: [AuthGuard]},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
