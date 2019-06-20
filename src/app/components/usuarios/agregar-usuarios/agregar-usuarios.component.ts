import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.scss']
})
export class AgregarUsuariosComponent {
  @ViewChild('form1') form: DynamicFormComponent;
  user;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Email',
      placeholder: 'Email',
      name: 'email',
      validation: [Validators.required, Validators.email]
    },
    {
      type: 'input',
      inputType: 'password',
      label: 'Contraseña',
      placeholder: 'Contraseña',
      name: 'password',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'Roles',
      placeholder: 'Roles',
      name: 'rol',
      validation: [Validators.required],
      options: ['Administrador', 'Director', 'SubDirector', 'Coordinador', 'Instructor', 'Secretaría']
    }
  ];

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
  }

  submit(value: { [name: string]: any }) {

    if (this.form.valid) {
      this.rest.push('user/user', this.form.value).subscribe(
        res => {
          console.log(res);
          this.user = res;
        }
      );
    }
  }

}


