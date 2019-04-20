import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgregarComponent } from './components/persona/agregar/agregar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormInputComponent } from './components/inputs/dynamic-form-input/dynamic-form-input.component';
import { DumpyComponent } from './components/dumpy/dumpy.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    NavbarComponent,
    DynamicFormInputComponent,
    DumpyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
