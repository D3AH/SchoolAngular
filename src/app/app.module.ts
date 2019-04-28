import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './components/persona/agregar/agregar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
