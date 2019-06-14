import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-instructor-curso',
  templateUrl: './agregar-instructor-curso.component.html',
  styleUrls: ['./agregar-instructor-curso.component.scss']
})
export class AgregarInstructorCursoComponent implements AfterViewInit {

  @ViewChild('form1') form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: [Validators.required]
    }, {
      type: 'selectModel',
      name: 'teacher',
      label: 'Instructor',
      placeholder: 'Instructor',
      options: [],
      validation: [Validators.required]
    }
  ];

  ngAfterViewInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.rest.put(`courses/${this.form.value.course}/addSon/${this.form.value.teacher}`, this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/curso/listar']);
        }
      );
    }
  }

  constructor(public rest: RestService, private router: Router) {
    this.rest.findAll('courses').subscribe(res => {
      res['Course'].forEach((code) => {
        code.fullName = code.code;
      });

      this.config[0].options = res['Course'];
    });

    this.rest.findAll('teacher').subscribe(res => {
      res['teacherListed'].forEach((code) => {
        code.fullName = code.code;
      });

      this.config[1].options = res['teacherListed'];
    });
  }

}
