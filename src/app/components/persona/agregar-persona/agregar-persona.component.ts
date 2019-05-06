import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent {
  @ViewChild('form1') form: DynamicFormComponent;
  @ViewChild('form2') form2: DynamicFormComponent;
  @ViewChild('form3') form3: DynamicFormComponent;

  validators = [lastNameValidator];

  submitted = false;
  isActive = false;
  disabled = true;
  textButtonStep2 = 'Omitir';
  textButtonStep3 = 'Omitir';
  formPersonValid = false;

  addressComponents;
  person;

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
      validation: []
    },
    {
      type: 'input',
      label: 'Apellido',
      name: 'firstSurname',
      placeholder: 'Ingresa apellido',
      validation: []
    },
    {
      type: 'input',
      label: 'Segundo apellido',
      name: 'lastSurname',
      placeholder: 'Ingresa segundo apellido',
      validation: []
    },
    {
      type: 'select',
      label: 'Estado civil',
      name: 'civilStatus',
      options: ['Casado', 'Soltero'],
      placeholder: 'Estado civil',
      validation: []
    },
    {
      type: 'input',
      label: 'Apellido de casada',
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

  directionFields: FieldConfig[] = [
    {
      type: 'input',
      name: 'description',
      label: 'Descripción',
      placeholder: 'Descripción',
      validation: [Validators.required]
    },
    {
      type: 'input',
      name: 'departamento',
      label: 'Departamento',
      placeholder: 'Departamento',
      validation: []
    },
    {
      type: 'input',
      name: 'municipio',
      label: 'Municipio',
      placeholder: 'Municipio',
      validation: []
    },
    {
      type: 'input',
      name: 'zone',
      label: 'Zona',
      placeholder: 'Zona',
      validation: []
    },
    {
      type: 'input',
      name: 'avenue',
      label: 'Avenida',
      placeholder: 'Avenida',
      validation: []
    },
    {
      type: 'input',
      name: 'street',
      label: 'Calle',
      placeholder: 'Calle',
      validation: []
    },
    {
      type: 'input',
      name: 'number',
      label: 'Número',
      placeholder: 'Número',
      validation: []
    },
    {
      type: 'input',
      name: 'level',
      label: 'Nivel',
      placeholder: 'Nivel',
      validation: []
    }
  ]

  constructor(private rest: RestService, private router: Router) {
    this.rest.findAll('addressComponents').subscribe(
      res => {
        this.addressComponents =  res.addressComponents;
      }
    )
}

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

    let previousValid3 = this.form3.valid;
    this.form3.changes.subscribe(() => {
      if (this.form3.valid !== previousValid3) {
        previousValid3 = this.form3.valid;
        this.form.setDisabled('submit', !previousValid3);
      }

      this.textButtonStep3 = this.form2.valid ? 'Siguiente' : 'Omitir';
    });
  }

  submit(value: { [name: string]: any }) {

    if (this.form.valid) {
      this.rest.push('persons', this.form.value).subscribe(
        res => {
          console.log(res);
          this.person = res;
        }
      );
    }
  }

  submit2(value: { [name: string]: any }) {
    this.form2.value.person = this.person.person._id;

    if (this.form2.valid) {
      this.rest.push('phones', this.form2.value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }

  submit3(value: { [name: string]: any }) {
    this.form3.value.person = this.person.person._id;

    if (this.form3.valid) {
      this.rest.push('addresses', this.form3.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        }
      );
    }
  }

}
