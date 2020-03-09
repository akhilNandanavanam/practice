import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JSONData } from './http-component/sample.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  myBehaviourSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  mySubject: Subject<number> = new Subject<number>();
  constructor(
    private http: HttpClient
  ) { }
  getJsonData() : Observable<Array<JSONData>>{
    return this.http.get<Array<JSONData>>('https://jsonplaceholder.typicode.com/posts').pipe(
      tap( tapData=> console.log(tapData)),
    map(res=>{
      return res.map(item => {
        if(item.id % 2 == 0){
          return item;
        }
      })
    }),
    );
  }
  postJsonData(data: any): Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  putJsonData(data: any): Observable<any>{
    return this.http.put('https://jsonplaceholder.typicode.com/posts', data);
  }
  patchJsonData(data: any): Observable<any>{
    return this.http.patch('https://jsonplaceholder.typicode.com/posts', data);
  }
  deleteJsonData(data: any): Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/');
  }
  mySampleFunc(){
    this.myBehaviourSubject.next(1);
    this.myBehaviourSubject.complete();
    this.myBehaviourSubject.next(2);
  }
}
