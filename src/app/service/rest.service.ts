import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:3789/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // @TODO no permite manipular el construsctor desde fuera
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    // @TODO Oye que pasa aquí?
    return res || [ ] || { };
  }

  getTeachers(): Observable<any> {
    return this.http.get(this.endpoint + 'users');
  }
}
