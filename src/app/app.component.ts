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
    { path: '/persona/agregarTelefono', icon:'phone', label: 'Agregar Teléfono'},
    { path: '/carrera/agregar', icon: 'class', label: 'Agregar Carrera' },
    { path: '/curso/agregar',icon: 'collections_bookmark', label: 'Agregar Cursos'},
    { path: '/familia/agregar', icon: 'peoples', label: 'Crear familia' },
    { path: '/persona/listar', icon: 'list_alt', label: 'Listar Persona' },
    { path: 'familia/listar', icon: 'list_alt', label: 'Listar Familia' },
    { path: '/curso/listar',icon: 'list_alt', label: 'Listar Cursos' },
    { path: '/carrera/listar', icon: 'list_alt', label: 'Listar Carrera' },
    { path: '/teacher/agregar', icon: 'person_add', label: 'Agregar Profesor'},
    { path: '/red/agregar', icon: 'collections_bookmark', label: 'Agregar Redes' },
    { path: '/teacher/listar', icon:'list_alt', label: 'Listar Profesores' },
    { path: '/red/listar', icon: 'list_alt', label: 'Listar Redes'},
    { path: '/red/editar', icon: '', label: 'Editar Redes' }
  ];

  constructor(private router: Router) {}

  toggle() {
    this.opened = !this.opened;
  }

  routeTo(route) {
    this.router.navigate([route]);
  }
}
