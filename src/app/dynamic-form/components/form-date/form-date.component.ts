import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'form-date',
    template: `
        <div
            [formGroup]="group">
            <mat-form-field>
                <input matInput [matDatepicker]="picker" placeholder="{{config.label}}" [formControlName]="config.name">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
        </div>
    `,
})
export class FormDateComponent {
    config: FieldConfig;
    group: FormGroup;
}
