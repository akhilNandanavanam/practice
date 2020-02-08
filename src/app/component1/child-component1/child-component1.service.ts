import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildComponent1Service {
  araay : Array<number> = [1,4,6,8,0];
  constructor() { }
  //flow for http calls:  component -> service -> http module -> api call
  getData(){
    return this.araay;
  }
  setData(data: number){
    this.araay.push(data);
  }
}
