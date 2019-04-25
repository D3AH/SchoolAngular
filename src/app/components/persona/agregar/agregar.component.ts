import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../services/rest.service';
import { Person } from '../../../models/person';
import { restoreView } from '@angular/core/src/render3';
// import { Data } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  person: Person;


  constructor(private formbuilder: FormBuilder, public rest: RestService) {
    this.person = new Person();
  }

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
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.rest.setPerson(this.registerForm.value).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
