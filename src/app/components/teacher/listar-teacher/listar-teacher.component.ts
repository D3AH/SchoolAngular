import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-teacher',
  templateUrl: './listar-teacher.component.html',
  styleUrls: ['./listar-teacher.component.scss']
})
export class ListarTeacherComponent implements OnInit {
  persons = [];
  teachers = [];

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.findAll('persons').subscribe(res =>{
      console.log(res);
      this.persons = res['persons'];
    });
    this.rest.findAll('teacher').subscribe(res =>{
      res['teacherListed'].forEach((teacher) => {
        teacher.person = this.persons.filter((person) => person._id == teacher.personalData)[0];
        this.teachers.push(teacher);
      });
    });
  }


}
