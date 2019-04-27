import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../types/input-base';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.input.key].valid
  };
}
