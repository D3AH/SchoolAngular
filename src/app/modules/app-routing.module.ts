import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPersonaComponent } from '../components/persona/agregar-persona/agregar-persona.component';
import { IndexComponent } from '../components/index/index.component';
import { ListarPersonaComponent } from '../components/persona/listar-persona/listar-persona.component';
import { AgregarTelefonoComponent } from '../components/persona/agregar-telefono/agregar-telefono.component';
import { AgregarFamiliaComponent } from '../components/familia/agregar-familia/agregar-familia.component';
import { ListarFamiliaComponent } from '../components/familia/listar-familia/listar-familia.component';
import { ListarCursosComponent } from '../components/curso/listar-cursos/listar-cursos.component';
import { AgregarCursoComponent } from '../components/curso/agregar-curso/agregar-curso.component';
import { AgregarCarreraComponent } from '../components/carrera/agregar-carrera/agregar-carrera.component';
import { AgregarHijoComponent } from '../components/familia/agregar-hijo/agregar-hijo.component';
import { ListarCarrerasComponent } from '../components/carrera/listar-carreras/listar-carreras.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'persona/agregar', component: AgregarPersonaComponent },
  { path: 'persona/listar', component: ListarPersonaComponent },
  { path: 'persona/agregarTelefono', component: AgregarTelefonoComponent },
  // Familia
  { path: 'familia/listar', component: ListarFamiliaComponent },
  { path: 'familia/agregar', component: AgregarFamiliaComponent },
  { path: 'familia/agregarHijo/:id', component: AgregarHijoComponent },
  // Cursos
  { path: 'curso/listar', component: ListarCursosComponent},
  { path: 'curso/agregar', component: AgregarCursoComponent },
  // Carrera
  { path: 'carrera/agregar', component: AgregarCarreraComponent },
  { path: 'carrera/listar', component: ListarCarrerasComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
