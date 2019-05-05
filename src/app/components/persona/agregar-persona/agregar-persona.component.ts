import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent {
  @ViewChild('form1') form: DynamicFormComponent;
  @ViewChild('form2') form2: DynamicFormComponent;

  submitted = false;
  isActive = false;
  disabled = true;
  textButtonStep2 = 'Omitir';
  formPersonValid = false;

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
      type: 'date',
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
    }
  ];

  phoneFields: FieldConfig[] = [
    {
      type: 'phone',
      name: 'number',
      label: 'Número',
      placeholder: 'Número',
      validation: [Validators.required, Validators.min(10000000), Validators.max(99999999)]
    },
    {
      type: 'input',
      name: 'description',
      label: 'Descripción',
      placeholder: 'Descripción',
      validation: [Validators.required]
    }
  ];

  constructor(private rest: RestService) { }

  ngAfterViewInit(): void {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }

      this.formPersonValid = this.form.valid;
      this.disabled = !this.form.valid;
    });

    let previousValid2 = this.form2.valid;
    this.form2.changes.subscribe(() => {
      if (this.form2.valid !== previousValid2) {
        previousValid2 = this.form2.valid;
        this.form.setDisabled('submit', !previousValid2);
      }

      this.textButtonStep2 = this.form2.valid ? 'Siguiente' : 'Omitir';
    });
  }

  submit(value: { [name: string]: any }) {
    console.log(this.form.value);
    
    if (this.form.valid) {
      this.rest.push('person', value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }

  submit2(value: { [name: string]: any }) {
    console.log(this.form2.value);

    if (this.form2.valid) {
      this.rest.push('phone', value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }

}
