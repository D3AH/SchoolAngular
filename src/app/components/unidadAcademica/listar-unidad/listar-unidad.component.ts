import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-unidad',
  templateUrl: './listar-unidad.component.html',
  styleUrls: ['./listar-unidad.component.scss']
})
export class ListarUnidadComponent implements OnInit {
  academics = [];
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.rest.findAll('academicUnity').subscribe(res => {
      this.academics = res['AcademicUnity'];
    });
  }
}
