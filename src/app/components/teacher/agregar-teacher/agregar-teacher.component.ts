import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-agregar-teacher',
  templateUrl: './agregar-teacher.component.html',
  styleUrls: ['./agregar-teacher.component.scss']
})
export class AgregarTeacherComponent implements OnInit {
  @ViewChild('form1') form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'personalData',
      label: 'Datos Personales',
      placeholder: 'Datos Personales',
      options: [],
      validation: []
    },
    {
      type: 'input',
      name: 'code',
      label: 'Código',
      placeholder: 'Código',
      options: [],
      validation: []
    },
    {
      type: 'input',
      name: 'profession',
      label: 'Profesión',
      placeholder: 'Profesión',
      options: [],
      validation: []
    }
  ]

  constructor(public rest: RestService, private router: Router) {
      this.rest.findAll('persons').subscribe(res => {
        this.config[0].options = res['persons'];
      });
   }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.rest.push('teacher', this.form.value).subscribe(
        res => {
          this.router.navigate(['/instructor/listar']);
        }
      );
    }
  }
}
