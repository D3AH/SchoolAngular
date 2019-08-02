import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-telefono',
  templateUrl: './agregar-telefono.component.html',
  styleUrls: ['./agregar-telefono.component.scss']
})
export class AgregarTelefonoComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  persons = [];
  submitted = false;
  disabled = true;

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'person',
      label: 'Persona',
      placeholder: 'Persona',
      options: [],
      validation: []
    },
    {
      type: 'input',
      name: 'description',
      label: 'Descripción',
      placeholder: 'Descripción',
      validation: [Validators.required]
    },
    {
      type: 'phone',
      name: 'number',
      label: 'Número',
      placeholder: 'Número',
      validation: [Validators.required, Validators.min(10000000), Validators.max(99999999)]
    }
  ];

  constructor(public rest: RestService, private router: Router) {
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.config[0].options = res['persons'];
    });
  }

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

  submit() {
    this.form.value.person = this.form.value.person.slice(this.form.value.person.indexOf('-') + 1);

    if (this.form.valid) {
      this.rest.push('phones', this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/persona/listar']);
        }
      );
    }
  }

}
