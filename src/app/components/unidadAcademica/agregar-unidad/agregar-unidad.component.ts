import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-unidad',
  templateUrl: './agregar-unidad.component.html',
  styleUrls: ['./agregar-unidad.component.scss']
})
export class AgregarUnidadComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  submitted = false;
  isActive = false;
  disabled = true;
  formPersonValid = false;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Código',
      placeholder: 'Código',
      name: 'code',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Descripción',
      placeholder: 'Descripción',
      name: 'description',
      validation: [Validators.required]
    }
  ];
  constructor(private rest: RestService, private router: Router) { }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }

      this.formPersonValid = this.form.valid;
      this.disabled = !this.form.valid;
    });

  }

  submit(value: { [name: string]: any }) {
    if (this.form.valid) {
      this.rest.push('academicUnity', this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/unidadAcademica/listar']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
