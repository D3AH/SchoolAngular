import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-teacher',
  templateUrl: './agregar-teacher.component.html',
  styleUrls: ['./agregar-teacher.component.scss']
})
export class AgregarTeacherComponent implements AfterViewInit {
  @ViewChild('form1') form: DynamicFormComponent;
  formSubmitDisable = true;
  code = '';
  today = new Date();

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'personalData',
      label: 'Datos Personales',
      placeholder: 'Datos Personales',
      options: [],
      validation: [Validators.required]
    },
    {
      type: 'input',
      name: 'profession',
      label: 'Profesión',
      placeholder: 'Profesión',
      options: [],
      validation: [Validators.required]
    }
  ];

  constructor(public rest: RestService, private router: Router) {
      this.rest.findAll('persons').subscribe(res => {
        this.config[0].options = res['persons'];
      });
   }

  ngAfterViewInit(): void {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      // Check validation
      if(this.form.value.personalData && this.form.value.profession) {
        this.code = this.today.getFullYear() + this.form.value.personalData;
      }
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }

      this.formSubmitDisable = !this.form.valid;
    });
  }

  submit() {
    this.form.value.code = this.code;
    if (this.form.valid) {
      this.rest.push('teacher', this.form.value).subscribe(
        res => {
          this.router.navigate(['/instructor/listar']);
        }
      );
    }
  }
}
