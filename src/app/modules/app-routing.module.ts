import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCarreraComponent } from '../components/carrera/agregar-carrera/agregar-carrera.component';
import { AgregarCursoComponent } from '../components/curso/agregar-curso/agregar-curso.component';
import { AgregarFamiliaComponent } from '../components/familia/agregar-familia/agregar-familia.component';
import { AgregarHijoComponent } from '../components/familia/agregar-hijo/agregar-hijo.component';
import { AgregarInscripcionComponent } from '../components/inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { AgregarInstructorCursoComponent } from '../components/curso/agregar-instructor-curso/agregar-instructor-curso.component';
import { AgregarJornadaSeccionComponent } from '../components/JornadaSeccion/agregar-jornada-seccion/agregar-jornada-seccion.component';
import { AgregarPersonaComponent } from '../components/persona/agregar-persona/agregar-persona.component';
import { AgregarRedComponent } from '../components/redes/agregar-red/agregar-red.component';
import { AgregarTeacherComponent } from '../components/teacher/agregar-teacher/agregar-teacher.component';
import { AgregarTelefonoComponent } from '../components/persona/agregar-telefono/agregar-telefono.component';
import { AgregarUnidadComponent } from '../components/unidadAcademica/agregar-unidad/agregar-unidad.component';
import { EditarRedComponent } from '../components/redes/editar-red/editar-red.component';
import { IndexComponent } from '../components/index/index.component';
import { ListarCarrerasComponent } from '../components/carrera/listar-carreras/listar-carreras.component';
import { ListarCursosComponent } from '../components/curso/listar-cursos/listar-cursos.component';
import { ListarFamiliaComponent } from '../components/familia/listar-familia/listar-familia.component';
import { ListarInscripcionComponent } from '../components/inscripcion/listar-inscripcion/listar-inscripcion.component';
import { ListarJornadaSeccionComponent } from '../components/JornadaSeccion/listar-jornada-seccion/listar-jornada-seccion.component';
import { ListarPersonaComponent } from '../components/persona/listar-persona/listar-persona.component';
import { ListarRedComponent } from '../components/redes/listar-red/listar-red.component';
import { ListarTeacherComponent } from '../components/teacher/listar-teacher/listar-teacher.component';
import { ListarUnidadComponent } from '../components/unidadAcademica/listar-unidad/listar-unidad.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'persona/agregar',
    component: AgregarPersonaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'persona/listar',
    component: ListarPersonaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'persona/agregarTelefono',
    component: AgregarTelefonoComponent,
    canActivate: [AuthGuard]
  },

  //Familia
  {
    path: 'familia/listar',
    component: ListarFamiliaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'familia/agregar',
    component: AgregarFamiliaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'familia/agregarHijo/:id',
    component: AgregarHijoComponent,
    canActivate: [AuthGuard]
  },

  //Cursos
  {
    path: 'curso/listar',
    component: ListarCursosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'curso/agregar',
    component: AgregarCursoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'curso/agregar/instructor',
    component: AgregarInstructorCursoComponent,
    canActivate: [AuthGuard]
  },

  // Carrera
  {
    path: 'carrera/agregar',
    component: AgregarCarreraComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'carrera/listar',
    component: ListarCarrerasComponent,
    canActivate: [AuthGuard]
  },

  // Teacher
  {
    path: 'instructor/agregar',
    component: AgregarTeacherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'instructor/listar',
    component:  ListarTeacherComponent,
    canActivate: [AuthGuard]
  },
  // Redes
  {
    path: 'red/agregar',
    component: AgregarRedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'red/listar',
    component: ListarRedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'red/editar',
    component: EditarRedComponent,
    canActivate: [AuthGuard]
  },
  // JornadaSección
  {
    path: 'JornadaSeccion/agregar',
    component: AgregarJornadaSeccionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'JornadaSeccion/listar',
    component: ListarJornadaSeccionComponent,
    canActivate: [AuthGuard]
  },
    // Inscripión
  {
    path: 'inscripcion/agregar',
    component: AgregarInscripcionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inscripcion/listar',
    component: ListarInscripcionComponent,
    canActivate: [AuthGuard]
  },
  // Unidad Academica
  {
    path: 'unidadAcademica/agregar',
    component: AgregarUnidadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unidadAcademica/listar',
    component: ListarUnidadComponent,
    canActivate: [AuthGuard]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
