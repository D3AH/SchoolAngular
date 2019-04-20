import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../types/input-base';

@Component({
  selector: 'app-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent {
    @Input() input: InputBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.input.key].valid
    };
}
