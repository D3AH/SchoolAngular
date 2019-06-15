import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-jornada-seccion',
  templateUrl: './listar-jornada-seccion.component.html',
  styleUrls: ['./listar-jornada-seccion.component.scss']
})
export class ListarJornadaSeccionComponent implements OnInit {
  daytime = [];

  constructor(public rest: RestService) {
   }



  ngOnInit() {
    this.rest.findAll('daytime').subscribe(res =>{
      console.log(res);
      this.daytime = res['daytimeListed'];
    });
  }

}
