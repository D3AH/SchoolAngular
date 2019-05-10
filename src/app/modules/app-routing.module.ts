import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPersonaComponent } from '../components/persona/agregar-persona/agregar-persona.component';
import { IndexComponent } from '../components/index/index.component';
import { ListarPersonaComponent } from '../components/persona/listar-persona/listar-persona.component';
import { AgregarTelefonoComponent } from '../components/persona/agregar-telefono/agregar-telefono.component';
import { AgregarFamiliaComponent } from '../components/familia/agregar-familia/agregar-familia.component';
import { ListarFamiliaComponent } from '../components/familia/listar-familia/listar-familia.component';
import { ListarCursosComponent } from '../components/curso/listar-cursos/listar-cursos.component';
import { AgregarCursoComponent } from '../components/cursos/agregar-curso/agregar-curso.component';
import { AgregarCarreraComponent } from '../components/carrera/agregar-carrera/agregar-carrera.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'persona/agregar', component: AgregarPersonaComponent },
  { path: 'persona/listar', component: ListarPersonaComponent },
  { path: 'persona/agregarTelefono', component: AgregarTelefonoComponent },
  // Familia
  { path: 'familia/listar', component: ListarFamiliaComponent },
  { path: 'familia/agregar', component: AgregarFamiliaComponent },
  // Cursos
  { path: 'cursos/listar', component: ListarCursosComponent},
  // Curso
 { path: 'curso/agregar', component: AgregarCursoComponent },
  // Carrera
  { path: 'carrera/agregar', component: AgregarCarreraComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
