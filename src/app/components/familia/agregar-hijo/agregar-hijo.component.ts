import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { RestService } from 'src/app/services/rest.service';
import { lastNameValidator } from 'src/app/shared/last-name-validator.directive';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-agregar-hijo',
  templateUrl: './agregar-hijo.component.html',
  styleUrls: ['./agregar-hijo.component.scss']
})
export class AgregarHijoComponent implements OnInit {
  @ViewChild('form1') form: DynamicFormComponent;
  family = '';

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'son',
      label: 'Hijo',
      placeholder: 'Hijo',
      options: [],
      validation: []
    }
  ];

  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router) {
    this.rest.findAll('persons').subscribe(res => {
      this.config[0].options = res['persons'];
    });
  }

  ngOnInit() {
    this.family = this.route.snapshot.paramMap.get('id');
  }

  submit() {
    if (this.form.valid) {
      console.log(`/${this.family}/addSon/${this.form.value.son}`);
      this.rest.put(`families/${this.family}/addSon/${this.form.value.son}`, this.form.value).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }
}
