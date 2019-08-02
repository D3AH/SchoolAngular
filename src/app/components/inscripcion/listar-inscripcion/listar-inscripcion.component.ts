import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-inscripcion',
  templateUrl: './listar-inscripcion.component.html',
  styleUrls: ['./listar-inscripcion.component.scss']
})
export class ListarInscripcionComponent implements OnInit {
  inscriptions = [];
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.rest.findAll('inscription').subscribe(res => {
      this.inscriptions = res['inscriptionListed'];
      console.log(res['inscriptionListed']);
    })
  }

}
