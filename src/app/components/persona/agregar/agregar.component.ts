import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../services/rest.service';
import { Person } from '../../../models/person';
import { restoreView } from '@angular/core/src/render3';
// import { Data } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  person: Person;


  constructor(private formbuilder: FormBuilder, public rest: RestService) {
    this.person = new Person();
  }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      firstSurname: ['', Validators.required],
      lastSurname: ['', Validators.required],
      marriedname: [''],
      birthdate: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      municipality: ['', Validators.required],
      zone: ['', Validators.required],
      neighborhood: ['', Validators.required],
      avenue: ['', Validators.required],
      street: ['', Validators.required],
      area: ['', Validators.required],
      houseNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      housePhone: ['', Validators.required],
      another: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  get firstName() { return this.registerForm.get('firstName'); }


  onSubmit() {
    this.submitted = true;
    // @TODO Validar formulario
    if(this.registerForm.valid) {
        // Formatear fecha
      const birthdate = this.registerForm.value.birthdate;
      this.registerForm.value.birthdate = `${birthdate.year}/${birthdate.month}/${birthdate.day}`;

      this.rest.setPerson(this.registerForm.value).subscribe(
        // @TODO manejar escenario Success | Error
        res => {
          console.log(res);
        }
      );
    } else {
      alert('invalide');
    }
  }
}
