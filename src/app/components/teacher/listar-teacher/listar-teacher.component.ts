import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-teacher',
  templateUrl: './listar-teacher.component.html',
  styleUrls: ['./listar-teacher.component.scss']
})
export class ListarTeacherComponent implements OnInit {
  teachers = [];

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.findAll('teacher').subscribe(res =>{
      console.log(res);
      this.teachers = res['teacherListed'];
    });
  }


}
