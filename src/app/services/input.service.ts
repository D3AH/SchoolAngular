import { Injectable }       from '@angular/core';

import { DropdownInput } from '../components/inputs/types/input-dropdown';
import { InputBase }     from '../components/inputs/types/input-base';
import { TextboxInput }  from '../components/inputs/types/input-textbox';

@Injectable()
export class InputService {

  // TODO: get from a remote source of input metadata
  // TODO: make asynchronous
  getInputs() {

    let inputs: InputBase<any>[] = [

      new DropdownInput({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxInput({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return inputs.sort((a, b) => a.order - b.order);
  }
}
