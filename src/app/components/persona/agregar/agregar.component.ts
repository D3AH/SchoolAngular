import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from '../../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  submitted = false;
  
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Nombre',
      name: 'nombre',
      placeholder: 'Ingresa nombre',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'SegundoNombre',
      name: 'segundoNombre',
      placeholder: 'Ingresa segundoNombre',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Apellido',
      name: 'apellido',
      placeholder: 'Ingresa apellido',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'SegundoApellido',
      name: 'segundoApellido',
      placeholder: 'Ingresa segundoApellido',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'ApellidoCasada',
      name: 'apellidoCasada',
      placeholder: 'Ingresa apellidoCasada',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'FechaNacimiento',
      name: 'fechaNacimiento',
      placeholder: 'Ingresa fechaNacimiento',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Religión',
      name: 'religión',
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
      type: 'input',
      label: 'Genero',
      name: 'genero',
      placeholder: 'Ingresa genero',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Departamento',
      name: 'departamento',
      placeholder: 'Ingresa departamento',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Municipio',
      name: 'municipio',
      placeholder: 'Ingresa municipio',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Zona',
      name: 'zona',
      placeholder: 'Ingresa zona',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Colonia',
      name: 'colonia',
      placeholder: 'Ingresa colonia',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Avenida',
      name: 'avenida',
      placeholder: 'Ingresa avenida',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Calle',
      name: 'calle',
      placeholder: 'Ingresa calle',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Sector',
      name: 'sector',
      placeholder: 'Ingresa sector',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'NumeroCasa',
      name: 'numeroCasa',
      placeholder: 'Ingresa numeroCasa',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Celular',
      name: 'celular',
      placeholder: 'Ingresa celular',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Domicilio',
      name: 'domicilio',
      placeholder: 'Ingresa domicilio',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Otro',
      name: 'otro',
      placeholder: 'Ingresa otro',
      validation: [Validators.required]
    },
    {
      type: 'button',
      label: 'Otro',
      name: 'otro'
    }
  ];

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
    console.log(value);
  }
}
