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
import { AgregarTeacherComponent } from '../components/teacher/agregar-teacher/agregar-teacher.component';
import { AgregarRedComponent } from '../components/redes/agregar-red/agregar-red.component';
import { ListarRedComponent } from '../components/redes/listar-red/listar-red.component';
import { ListarTeacherComponent } from '../components/teacher/listar-teacher/listar-teacher.component';
import { EditarRedComponent } from '../components/redes/editar-red/editar-red.component';
import { AgregarJornadaSeccionComponent } from '../components/JornadaSeccion/agregar-jornada-seccion/agregar-jornada-seccion.component';
import { ListarJornadaSeccionComponent } from '../components/JornadaSeccion/listar-jornada-seccion/listar-jornada-seccion.component';

import { AgregarInscripcionComponent } from '../components/inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ListarInscripcionComponent } from '../components/inscripcion/listar-inscripcion/listar-inscripcion.component';
import { AgregarInstructorCursoComponent } from '../components/curso/agregar-instructor-curso/agregar-instructor-curso.component';
import { AgregarUnidadComponent } from '../components/unidadAcademica/agregar-unidad/agregar-unidad.component';
import { ListarUnidadComponent } from '../components/unidadAcademica/listar-unidad/listar-unidad.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'inicio', component: IndexComponent },
  { path: 'persona/agregar', component: AgregarPersonaComponent },
  { path: 'persona/listar', component: ListarPersonaComponent },
  { path: 'persona/agregarTelefono', component: AgregarTelefonoComponent },
  // Familia
  { path: 'familia/listar', component: ListarFamiliaComponent },
  { path: 'familia/agregar', component: AgregarFamiliaComponent },
  { path: 'familia/agregarHijo/:id', component: AgregarHijoComponent },
  // Cursos
  { path: 'curso/listar', component: ListarCursosComponent },
  { path: 'curso/agregar', component: AgregarCursoComponent },
  { path: 'curso/agregar/instructor', component: AgregarInstructorCursoComponent },
  // Carrera
  { path: 'carrera/agregar', component: AgregarCarreraComponent },
  { path: 'carrera/listar', component: ListarCarrerasComponent },
  //Teacher
  { path: 'instructor/agregar', component: AgregarTeacherComponent },
  { path: 'instructor/listar', component:  ListarTeacherComponent },
  //Redes
  { path: 'red/agregar', component: AgregarRedComponent },
  { path: 'red/listar', component: ListarRedComponent },
  { path: 'red/editar', component: EditarRedComponent },
  //JornadaSección
  { path: 'JornadaSeccion/agregar', component: AgregarJornadaSeccionComponent },
  { path: 'JornadaSeccion/listar', component: ListarJornadaSeccionComponent },
    //Inscripión
  { path: 'inscripcion/agregar', component: AgregarInscripcionComponent },
  { path: 'inscripcion/listar', component: ListarInscripcionComponent },
  //Unidad Academica
  { path: 'unidadAcademica/agregar', component: AgregarUnidadComponent },
  { path: 'unidadAcademica/listar', component: ListarUnidadComponent },

  //Login
  { path: 'login', component: LoginComponent}
];  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
