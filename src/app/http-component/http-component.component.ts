import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.scss']
})
export class HttpComponentComponent implements OnInit {

  constructor(
    private httpService: HttpServiceService
  ) { }

  ngOnInit() {
    this.httpService.myBehaviourSubject.subscribe(res=>{
      console.log('Behavior Subject', res);
    });
  }
  getJsonDataOnClick(){
    this.httpService.mySampleFunc();
    this.httpService.getJsonData().subscribe(res => {
      res.map(item=>{
        if(item != undefined){
          console.log('Item--->', item);
        }
      })
    });
  }
}
