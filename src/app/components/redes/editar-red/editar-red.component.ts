import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-editar-red',
  templateUrl: './editar-red.component.html',
  styleUrls: ['./editar-red.component.scss']
})
export class EditarRedComponent implements OnInit {
  @ViewChild('form1') form: DynamicFormComponent;
  network = '';

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'course',
      label: 'Curso',
      placeholder: 'Curso',
      options: [],
      validation: []
    },
    {
      type: 'selectModel',
      name: 'network',
      label: 'Red',
      placeholder: 'Red',
      options: [],
      validation: []
    },
  ];

  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router) {
    this.rest.findAll('courses').subscribe(res => {
      this.config[0].options = res['Course'];
      this.config[1].options = res['Course'];
      this.config[2].options = res['Course'];
      this.config[3].options = res['Course'];
      this.config[4].options = res['Course'];
    });

    this.rest.findAll('network').subscribe(res => {
      this.config[5].options = res['listNetworks']
      var pee = this.config[5].options;
      console.log(pee);
    })
  }

  ngOnInit() {
    this.network = this.route.snapshot.paramMap.get('id');
  }

  submit() {
    if (this.form.valid) {

      this.rest.put(`network/${this.form.value.network}/addNetwork/${this.form.value.course}`, this.form.value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }

}
