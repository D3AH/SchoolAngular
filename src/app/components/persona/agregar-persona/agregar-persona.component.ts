import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  submitted = false;
  isActive = false;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Nombre',
      name: 'firstName',
      placeholder: 'Ingresa nombre',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Segundo nombre',
      name: 'secondName',
      placeholder: 'Ingresa segundo nombre',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Apellido',
      name: 'firstSurname',
      placeholder: 'Ingresa apellido',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Segundo apellido',
      name: 'lastSurname',
      placeholder: 'Ingresa segundo apellido',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Apellido casada',
      name: 'marriedname',
      placeholder: 'Ingresa apellido casada',
      validation: []
    },
    {
      type: 'input',
      label: 'Fecha de nacimiento',
      name: 'birthdate',
      placeholder: 'Ingresa fecha nacimiento',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Religión',
      name: 'religion',
      placeholder: 'Ingresa religión',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Ingresa email',
      validation: [Validators.required, Validators.email]
    },
    {
      type: 'select',
      label: 'Sexo',
      name: 'sex',
      options: ['Masculino', 'Femenino'],
      placeholder: 'Ingresa sexo',
      validation: [Validators.required]
    },
    {
      type: 'button',
      label: 'Agregar',
      name: 'submit-button'
    }
  ];

  constructor(private rest: RestService) {}

  ngAfterViewInit(): void {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(()=> {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  }

  submit(value: { [name: string]: any }) {
    if (this.form.valid) {
      this.rest.push('person', value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }

}
