import { Component } from '@angular/core';

import { InputService } from './services/input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InputService]
})
export class AppComponent {
  inputs: any[];

  constructor(service: InputService) {
    this.inputs = service.getInputs();
  }
}
