import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-familia',
  templateUrl: './agregar-familia.component.html',
  styleUrls: ['./agregar-familia.component.scss']
})
export class AgregarFamiliaComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'father',
      label: 'Padre',
      placeholder: 'Padre',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'mother',
      label: 'Madre',
      placeholder: 'Madre',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'sons',
      label: 'Hijo',
      placeholder: 'Hijo',
      options: [],
      validation: []
    }
  ];

  constructor(public rest: RestService) {
    this.rest.findAll('persons').subscribe(res => {
      this.config[0].options = res['persons'];
      this.config[1].options = res['persons'];
      this.config[2].options = res['persons'];
    });
  }

  submit() {
    if (this.form.valid) {
      this.rest.push('families', this.form.value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }
}
