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

  links = [
    { path: '/persona/agregar', icon: 'person_add', label: 'Agregar persona' },
    { path: '/agregar', icon: 'peoples', label: 'Crear familia' },
    { path: '/carrera/agregar', icon: 'class', label: 'Agregar Carrera' }
  ];

  constructor(private router: Router) {}

  toggle() {
    this.opened = !this.opened;
  }

  routeTo(route) {
    this.router.navigate([route]);
  }
}
