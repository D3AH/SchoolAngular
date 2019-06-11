import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-listar-red',
  templateUrl: './listar-red.component.html',
  styleUrls: ['./listar-red.component.scss']
})
export class ListarRedComponent implements OnInit {
  networks = [];
  careers = [];
  courses = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('careers').subscribe(res => {
      this.careers = res['career'];
    });
    this.rest.findAll('courses').subscribe(res => {
      this.courses = res['Course'];
    });

    this.rest.findAll('networks').subscribe(res => {
      res['networks'].forEach((network) => {
        network.career = this.careers.find((career) => {
          return career._id == network.career;
        });

        let tmpCourses = [];
        network.courses.forEach((course) => {
          tmpCourses.push(this.courses.find((courseObject) => courseObject == course));
        });

        network.course = tmpCourses;
      });
      this.networks = res['networks'];
    });
  }

}
