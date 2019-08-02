import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit {
  courses = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('courses').subscribe(res =>{
      this.courses = res['Course'];
    });
  }

}
