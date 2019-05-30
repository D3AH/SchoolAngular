import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.scss']
})
export class AgregarCursoComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  submitted = false;
  isActive = false;
  disabled = true;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Código del curso',
      placeholder: 'Código del curso',
      name: 'code',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Nombre del curso',
      placeholder: 'Nombre del curso',
      name: 'name',
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
      this.rest.push('courses', this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/curso/listar']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
