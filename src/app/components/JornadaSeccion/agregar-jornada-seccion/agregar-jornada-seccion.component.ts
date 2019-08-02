import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { JornadaValidator } from 'src/app/shared/jornada-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-jornada-seccion',
  templateUrl: './agregar-jornada-seccion.component.html',
  styleUrls: ['./agregar-jornada-seccion.component.scss']
})
export class AgregarJornadaSeccionComponent {
  @ViewChild('form1') form: DynamicFormComponent;

  validators = [JornadaValidator];

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'career',
      label: 'Carrera',
      placeholder: 'Carrera',
      options: [],
      validation: []
    },
    {
      type: 'select',
      name: 'daytime',
      label: 'Jornada',
      placeholder: 'Jornada',
      options: ['Matutina', 'Vespertina'],
      validation: [Validators.required]
    },
    {
      type: 'input',
      name: 'section',
      label: 'Sección',
      placeholder: 'Sección',
      options: [],
      validation: [Validators.required]
    },
    {
      type: 'input',
      name: 'grade',
      label: 'Grado',
      placeholder: 'Grado',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'courses',
      label: 'Cursos',
      placeholder: 'Cursos',
      options: [],
      validation: []
    }
  ]

  constructor(public rest: RestService, private router: Router) {
    this.rest.findAll('careers').subscribe(res => {
      res['career'].forEach((career) => {
        career.fullName = career.name;
      });

      this.config[0].options = res['career'];
    });

    this.rest.findAll('courses').subscribe(res => {
      res['Course'].forEach((course) => {
        course.fullName = course.name;
      });

      this.config[4].options = res['Course'];
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.rest.push('daytime', this.form.value).subscribe(
        res => {
          this.router.navigate(['/JornadaSeccion/listar']);
        }
      );
    }
  }
}



