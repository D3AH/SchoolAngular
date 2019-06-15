import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-red',
  templateUrl: './listar-red.component.html',
  styleUrls: ['./listar-red.component.scss']
})
export class ListarRedComponent implements OnInit {
  networks = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('networks').subscribe(res =>{
        console.log(res);
        this.networks = res['networks']
    })
  }

}
