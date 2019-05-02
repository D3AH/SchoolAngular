import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = environment.endpoint;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res || [ ] || { };
  }

  /**
   * FindAll
   * Ej:
   *  findAll('person')
   *
   * @param modelName Nombre de la entidad
   */
  findAll(modelName: string) {
    return this.http.get(this.endpoint + modelName).pipe(
      map(this.extractData)
    );
  }

  /**
   * FindOne
   * Ej:
   *  findOne('person', '5cc1d996cee8d5222877f161')
   *
   * @param modelName Nombre de la entidad a buscar
   * @param id Id de la entidad
   */
  findOne(modelName: string, id: string) {
    return this.http.get(this.endpoint + modelName + `/${id}`).pipe(
      map(this.extractData)
    );
  }

  /**
   * Push
   * Ej:
   *  push('person', { firstName: 'Name', ... })
   *
   * @param modelName Nombre de la entidad
   * @param object Objeto a guardar
   */
  push(modelName: string, object) {
    const params = JSON.stringify(object);
    return this.http.post(this.endpoint + modelName, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
