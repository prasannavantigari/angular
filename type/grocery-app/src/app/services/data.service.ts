import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseUrl="http://apolis-grocery.herokuapp.com/api/"
  private _categoryUrl="category"

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<any>(`${this._baseUrl+this._categoryUrl}`);
  }
}
