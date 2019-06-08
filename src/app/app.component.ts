import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  path?: string;
  icon?: string;

  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Persona',
    children: [
      { path: '/persona/agregar', icon: 'person_add', name: 'Agregar persona' },
      { path: '/persona/agregarTelefono', icon: 'phone', name: 'Agregar Teléfono'},
      { path: '/persona/listar', icon: 'list_alt', name: 'Listar Persona' },
    ]
  }, {
    name: 'Carrera',
    children: [
      { path: '/carrera/agregar', icon: 'class', name: 'Agregar Carrera' },
      { path: '/carrera/listar', icon: 'list_alt', name: 'Listar Carrera' },
    ]
  }, {
    name: 'Curso',
    children: [
      { path: '/curso/agregar', icon: 'collections_bookmark', name: 'Agregar Cursos'},
      { path: '/curso/listar', icon: 'list_alt', name: 'Listar Cursos' },
    ]
  }, {
    name: 'Redes de estudio',
    children: [
      { path: '/red/agregar', icon: 'collections_bookmark', name: 'Agregar Red de estudio' },
      { path: '/red/editar', icon: '', name: 'Agregar curso a red de estudio' },
      { path: '/red/listar', icon: 'list_alt', name: 'Listar Redes de estudio'},
    ]
  }, {
    name: 'Familia',
    children: [
      { path: '/familia/agregar', icon: 'peoples', name: 'Crear familia' },
      { path: '/familia/listar', icon: 'list_alt', name: 'Listar Familia' },
    ]
  }, {
    name: 'Instructores',
    children: [
      { path: '/instructor/agregar', icon: 'person_add', name: 'Agregar Profesor' },
      { path: '/instructor/listar', icon:'list_alt', name: 'Listar Profesores' },
    ]
  },{
    name: 'Inscripciones',
    children: [
      { path: '/inscripcion/agregar', icon: 'person_add', name: 'Inscríbete' },
      { path: '/inscripcion/listar', icon: 'list_alt', name: 'Mira los inscrítos' }
    ]
  }, {
    name: 'Jornada y Sección',
    children: [
      { path: '/JornadaSeccion/agregar', icon: 'library_add', name: 'Agregar Jornada' },
      { path: '/JornadaSeccion/listar', icon:'list_alt', name: 'Listar Jornada' },
    ]
  },{
    name: 'Unidad Académica',
    children: [
      { path: '/unidadAcademica/agregar', icon: 'library_add', name: 'Agregar Unidad' },
      { path: '/unidadAcademica/listar', icon: 'list_alt', name: 'Listar Unidad' },
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  path?: string;
  icon?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datos;
  events: string[] = [];
  opened: boolean;
  treeFlattener;
  dataSource;

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);


  links = [];

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      icon: node.icon,
      level
    };
  }

  constructor(private router: Router) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  toggle() {
    this.opened = !this.opened;
  }

  routeTo(route) {
    this.router.navigate([route]);
  }
}
