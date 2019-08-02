import { Component, ViewContainerRef } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-phone',
    template: `
    <div [formGroup]="group">
        <mat-form-field>
            <span matPrefix>+502 &nbsp;</span>
            <input matInput type="number"  placeholder="{{config.placeholder}}" value="{{config.value}}" [formControlName]="config.name">
        </mat-form-field>
    </div>
    `
})
export class FormPhoneComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
