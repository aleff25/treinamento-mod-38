import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CargasService {

  constructor(private _http: HttpClient) { }


  getCargas() {
    const resourceUrl = `/cargas`;
    return this._http.get(resourceUrl);
  }

  getCargasComId(id: number) {
    const resourceUrl = `/cargas/${id}`;
    return this._http.get(resourceUrl);
  }
}
