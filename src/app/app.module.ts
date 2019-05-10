import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { AgregarPersonaComponent } from './components/persona/agregar-persona/agregar-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarFamiliaComponent } from './components/familia/agregar-familia/agregar-familia.component';
import { IndexComponent } from './components/index/index.component';
import { ListarPersonaComponent } from '../app/components/persona/listar-persona/listar-persona.component';
import { AgregarTelefonoComponent } from './components/persona/agregar-telefono/agregar-telefono.component';
import { ListarFamiliaComponent } from './components/familia/listar-familia/listar-familia.component';
import { ListarCursosComponent } from './components/curso/listar-cursos/listar-cursos.component';
import { AgregarCursoComponent } from './components/cursos/agregar-curso/agregar-curso.component';
import { AgregarCarreraComponent } from './components/carrera/agregar-carrera/agregar-carrera.component';
import { ListarCarrerasComponent } from './components/carrera/listar-carreras/listar-carreras.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarPersonaComponent,
    AgregarFamiliaComponent,
    ListarPersonaComponent,
    IndexComponent,
    AgregarTelefonoComponent,
    ListarFamiliaComponent,
    ListarCursosComponent,
    AgregarCursoComponent,
    AgregarCarreraComponent,
    ListarCarrerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DynamicFormModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
