import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { InputBase }              from '../inputs/types/input-base';
import { InputControlService }    from '../../services/input-control.service';

@Component({
  selector: 'app-dumpy',
  templateUrl: './dumpy.component.html',
  styleUrls: ['./dumpy.component.scss'],
  providers: [ InputControlService ]
})
export class DumpyComponent implements OnInit {

  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: InputControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.inputs);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
