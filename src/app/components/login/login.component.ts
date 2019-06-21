import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form1') form: DynamicFormComponent;

  
  config: FieldConfig[] = [
    {
      type: 'input',
      inputType: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Ingrese su dirección de email',
      options: [],
      validation: [Validators.email]
    },
    {
      type: 'input',
      inputType: 'password',
      label: 'Contraseña',
      name: 'password',
      placeholder: 'Ingrese su contraseña',
      options: [],
      validation: [Validators.required]
    },
  ];
    
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
  }

  submit(value: { [name: string]: any }){
      if(this.form.valid){
        this.rest.push('user', this.form.value).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/inicio']);
          }
        )
      }
  }

}
