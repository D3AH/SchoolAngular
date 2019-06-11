import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { InscripcionValidator } from 'src/app/shared/inscripcion-validator.directive';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})
export class AgregarInscripcionComponent implements AfterViewInit {
  @ViewChild('form1') form: DynamicFormComponent;
  formSubmitDisable = true;

  validators = [InscripcionValidator];

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'person',
      label: 'Estudiante',
      placeholder: 'Estudiante',
      options: [],
      validation: [Validators.required]
    },{
      type: 'selectModel',
      name: 'academicUnity',
      label: 'Unidad académica',
      placeholder: 'Unidad académica',
      options: [],
      validation: [Validators.required]  
    },
    {
      type: 'selectModel',
      name: 'career',
      label: 'Carrera',
      placeholder: 'Carrera',
      options: [],
      validation: []
    },
    {
      type: 'input',
      name: 'grade',
      label: 'Grado',
      placeholder: 'Grado',
      options: [],
      validation: [Validators.required]
    },
    {
      type: 'input',
      name: 'fee',
      label: 'Cuota',
      placeholder: 'Cuota',
      options: [],
      validation: [Validators.required]

    },
    {
      type: 'select',
      name: 'daytime',
      label: 'Jornada',
      placeholder: 'Jornada',
      options: ['Matutina','Vespertina'],
      validation: []  
    },
    {
      type: 'input',
      name: 'section',
      label: 'Sección',
      placeholder: 'Sección',
      options: [],
      validation: [Validators.required]

    }

  ];
  
  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

  submit(value: {[name: string]: any}){
      if(this.form.valid){
        this.rest.push('inscription', this.form.value).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/inscripcion/listar']);
          },
          err => {
            console.log(err);
          }
        )
      }
  }

  constructor(public rest: RestService, private router: Router) {
    this.rest.findAll('persons').subscribe(res => {
      this.config[0].options = res['persons'];
    });

    this.rest.findAll('academicUnity').subscribe(res => {
      res['AcademicUnity'].forEach((code) => {
        code.fullName = code.code;
      })

      this.config[1].options = res['AcademicUnity'];
    });

    this.rest.findAll('careers').subscribe(res => {
      res['career'].forEach((course) => {
        course.fullName = course.name;
      });

      this.config[2].options = res['career'];
    });
   }
}
