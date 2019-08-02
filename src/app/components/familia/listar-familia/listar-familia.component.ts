import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-familia',
  templateUrl: './listar-familia.component.html',
  styleUrls: ['./listar-familia.component.scss']
})
export class ListarFamiliaComponent implements OnInit {
  families = [];

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.findAll('families').subscribe(
      res => {
        res['families'].forEach((family) => {
          this.rest.get(`families/${family._id}/names`).subscribe(
            res => {
              this.families.push(res);
            }
          );
        });
      }
    );
  }

  open(id) {
    this.router.navigate(['familia/agregarHijo', id]);
  }

}
