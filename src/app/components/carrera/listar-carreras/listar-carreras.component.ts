import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.scss']
})
export class ListarCarrerasComponent implements OnInit {
  careers = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('careers').subscribe(res=>{
      console.log(res);
      this.careers = res['career'];
    });
  }

}
