import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPersonaComponent } from '../components/persona/agregar-persona/agregar-persona.component';
import { IndexComponent } from '../components/index/index.component';
import { ListarPersonaComponent } from '../components/persona/listar-persona/listar-persona.component';
import { AgregarTelefonoComponent } from '../components/persona/agregar-telefono/agregar-telefono.component';
import { AgregarFamiliaComponent } from '../components/familia/agregar-familia/agregar-familia.component';
import { ListarFamiliaComponent } from '../components/familia/listar-familia/listar-familia.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'persona/agregar', component: AgregarPersonaComponent },
  { path: 'persona/listar', component: ListarPersonaComponent },
  { path: 'persona/agregarTelefono', component: AgregarTelefonoComponent },
  { path: 'familia/agregar', component: AgregarFamiliaComponent },
  // Familia
  { path: 'familia/listar', component: ListarFamiliaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
