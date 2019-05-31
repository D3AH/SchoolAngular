import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-red',
  templateUrl: './agregar-red.component.html',
  styleUrls: ['./agregar-red.component.scss']
})
export class AgregarRedComponent implements OnInit {
  @ViewChild('form1') form: DynamicFormComponent;


  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'courses',
      label: 'Cursos',
      placeholder: 'Cursos',
      options: [],
      validation: []
    },
    {
      type: 'input',
      name: 'description',
      label: 'Descripción',
      placeholder: 'Descripción',
      options: [],
      validation: []
    },
  ]
  constructor(public rest: RestService, private router: Router) { 
    this.rest.findAll('courses').subscribe(res => {
      this.config[0].options = res['Course'];
    })
  }

  ngOnInit() {
  }


  submit() {
    if (this.form.valid) {
      this.rest.push('network', this.form.value).subscribe(
        res => {
          console.log(res);

        }
      );
    }
  }
}
