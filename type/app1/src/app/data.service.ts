import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post.model';

@Injectable()
  
export class DataService {
 private _url="http://jsonplaceholder.typicode.com/posts";
 

  constructor(private http:HttpClient){}
  getPosts():Observable<IPost[]>{
     return this.http.get<IPost[]>(this._url);
  }

}
  


