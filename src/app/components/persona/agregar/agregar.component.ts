import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Data } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      nombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      apellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      apellidoCasada: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      religión: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      genero: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      zona: ['', Validators.required],
      colonia: ['', Validators.required],
      avenida: ['', Validators.required],
      calle: ['', Validators.required],
      sector: ['', Validators.required],
      numeroCasa: ['', Validators.required],
      celular: ['', Validators.required],
      domicilio: ['', Validators.required],
      otro: ['', Validators.required],
    });
    
    console.log(this.registerForm.controls);
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // values here

    if(!this.registerForm.valid) {
      console.log('error!');
      return;
    }

    alert('Go out here!');
  }
}
