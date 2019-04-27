import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from 'src/app/components/forms/types/input-base';

@Injectable({
  providedIn: 'root'
})
export class InputTypeService {

  constructor() { }

  toFormGroup(inputs: InputBase<any>[]) {
    let group: any = {};

    inputs.forEach(input => {
      // @TODO esto debe ser más complejo
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }
}
