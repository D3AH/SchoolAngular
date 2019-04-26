import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:4022/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // @TODO no permite manipular el construsctor desde fuera
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    // @TODO Oye que pasa aquí?
    let body = res;
    return res || [ ] || { };
  }

  getPerson(): Observable<any> {
    return this.http.get(this.endpoint + '/istPerson').pipe(
      map(this.extractData)
    );
  }

  setPerson(person_save){
    var params = JSON.stringify(person_save);
    return this.http.post(this.endpoint + '/savePerson', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
