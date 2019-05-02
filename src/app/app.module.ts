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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarPersonaComponent,
    AgregarFamiliaComponent
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
