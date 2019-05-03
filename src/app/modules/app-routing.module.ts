import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPersonaComponent } from '../components/persona/agregar-persona/agregar-persona.component';
import { IndexComponent } from '../components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'persona/agregar', component: AgregarPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
