import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-carrera',
  templateUrl: './agregar-carrera.component.html',
  styleUrls: ['./agregar-carrera.component.scss']
})
export class AgregarCarreraComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  submitted = false;
  isActive = false;
  disabled = true;

  config: FieldConfig[] = [{
    type: 'input',
    label: 'Código de carrera',
    placeholder: 'Código de carrera',
    name: 'code',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'Nombre de la carrera',
    placeholder: 'Nombre de la carrera',
    name: 'name',
    validation: [Validators.required]
  },
  {
      type: 'input',
      label: 'descripcion de carrera',
      placeholder: 'descripcion de la carrera',
      name: 'description',
      validation: [Validators.required]
    }
];

  constructor(private rest: RestService, private router: Router) { }

  ngAfterViewInit(): void {
    let previousValid = this.form.valid;
      this.form.changes.subscribe(() => {
        if (this.form.valid !== previousValid) {
          previousValid = this.form.valid;
          this.form.setDisabled('submit', !previousValid);
        }
  
        this.disabled = !this.form.valid;
      });
  }
  
  submit(value: { [name: string]: any }) {
    if (this.form.valid) {
      this.rest.push('careers', this.form.value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  } 
  
}
