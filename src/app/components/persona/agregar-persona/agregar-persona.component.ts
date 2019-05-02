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
      label: 'Genero',
      name: 'gender',
      options: ['Masculino', 'Femenino'],
      placeholder: 'Ingresa genero',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Departamento',
      name: 'department',
      placeholder: 'Ingresa departamento',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Municipio',
      name: 'municipality',
      placeholder: 'Ingresa municipio',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Zona',
      name: 'zone',
      placeholder: 'Ingresa zona',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Colonia',
      name: 'neighborhood',
      placeholder: 'Ingresa colonia',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Avenida',
      name: 'avenue',
      placeholder: 'Ingresa avenida',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Calle',
      name: 'street',
      placeholder: 'Ingresa calle',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Sector',
      name: 'area',
      placeholder: 'Ingresa sector',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Número de casa',
      name: 'houseNumber',
      placeholder: 'Ingresa número de casa',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Número de teléfono (Celular)',
      name: 'mobileNumber',
      placeholder: 'Ingresa celular',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Número de teléfono (Domicilio)',
      name: 'housePhone',
      placeholder: 'Ingresa domicilio',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Número de teléfono (Otro)',
      name: 'another',
      placeholder: 'Ingresa otro',
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
