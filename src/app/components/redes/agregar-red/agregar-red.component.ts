import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators } from '@angular/forms';
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
  networks;
  selectedNetworks;

  config: FieldConfig[] = [
    {
      type: 'selectModel',
      name: 'career',
      label: 'Carrera',
      placeholder: 'Carreras',
      options: [],
      validation: [Validators.required]
    },
    {
      type: 'selectModel',
      name: 'courses',
      label: 'Cursos',
      placeholder: 'Cursos',
      options: [],
      validation: [Validators.required]
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
      name: 'description',
      label: 'Descripción',
      placeholder: 'Descripción',
      options: [],
      validation: [Validators.required]
    },
    {
      type: 'date',
      label: 'Fecha de inicio',
      name: 'dateStart',
      placeholder: 'Ingresa fecha nacimiento',
      validation: [Validators.required]
    },
    {
      type: 'date',
      label: 'Fecha de fin',
      name: 'dateEnd',
      placeholder: 'Ingresa fecha nacimiento',
      validation: [Validators.required]
    }
  ];

  constructor(public rest: RestService, private router: Router, private _snackBar: MatSnackBar) {
    this.rest.findAll('careers').subscribe(res => {
      res['career'].forEach((course) => {
        course.fullName = course.name;
      });

      this.config[0].options = res['career'];
    });

    this.rest.findAll('courses').subscribe(res => {
        res['Course'].forEach((name) => {
          name.fullName = name.name;
        });

        this.config[1].options = res['Course'];
    });

    this.rest.findAll('networks').subscribe(
      res => {
        this.networks = res['networks'];
      }
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.form.changes.subscribe(() => {
      this.selectedNetworks = this.networks.filter((network) => network.career === this.form.value.career);
    });
  }

  submit() {
    if (this.form.value.dateStart >= this.form.value.dateEnd) {
      console.error('Lapso de fechas incorrecto.');
      return false;
    }
    if (this.form.valid) {
      this.rest.push('networks', this.form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/red/listar']);
        },
        err => {
          console.log(err);
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5 * 1000,
            data: err.error.message
          });
        }
      );
    }
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <span> Un error inesperado a ocurrido. {{data}} </span>
  `,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}