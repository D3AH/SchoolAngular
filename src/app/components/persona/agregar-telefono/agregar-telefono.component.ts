import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-agregar-telefono',
  templateUrl: './agregar-telefono.component.html',
  styleUrls: ['./agregar-telefono.component.scss']
})
export class AgregarTelefonoComponent implements OnInit {
  persons = [];

  constructor( public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.persons = res['persons'];
    });
  }

  getPerson(){
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.persons = res['person'];
    });
  }

}
