import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  datos;

  ngOnInit(): void {
    this.getData((json) => this.datos = json);
  }

  getData(func) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => func(json));
  }
}
