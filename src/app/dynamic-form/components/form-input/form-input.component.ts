import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="{{config.placeholder}}" value="" [formControlName]="config.name">
      </mat-form-field>
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
