import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select-model',
  template: `
    <div
      [formGroup]="group">
      <mat-form-field>
        <mat-label>{{config.label}}</mat-label>
        <mat-select [formControlName]="config.name">
          <mat-option *ngFor="let option of config.options"
            [value]="option._id">
            {{option.fullName}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `
})
export class FormSelectModelComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
