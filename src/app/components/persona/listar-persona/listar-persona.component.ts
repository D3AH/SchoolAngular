import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent implements OnInit {
  persons = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.persons = res.persons;
    });
  }

  getPerson(){
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.persons = res.persons;
    });
  }

}
