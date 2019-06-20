import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  today: Date;
  user;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.today = new Date();
    this.user = this.auth.currentUserValue;
  }

}
