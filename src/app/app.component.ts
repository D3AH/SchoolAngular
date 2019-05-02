import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  datos;
  events: string[] = [];
  opened: boolean;

  constructor(private router: Router) {}

  toggle() {
    this.opened = !this.opened;
    console.log(this.opened);
  }

  routeTo(route) {
    this.router.navigate(['/agregar']);
  }
}
