import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { ChildComponent1Service } from './child-component1.service';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.scss']
})
export class ChildComponent1Component implements OnInit {
  mySubject : Subject<number> = new Subject<number>();
  index :number = 0;
  subjectValue: number;
  constructor(private service: ChildComponent1Service) { }
  // Class1 ads = new this.Class1();

  ngOnInit() {
    console.log(this.service.getData());
    // subscriber
    this.mySubject.subscribe(res=>{

      console.log('Subject Value', this.subjectValue);
      console.log('Hello There!!', this.service.getData());
      this.subjectValue = res;
    },
    (err)=>{
      console.log('Hello There!! We have an error');
      console.log(err);
    });
  }
  sendDataToSubject(){
    this.index++;
    // publisher 
    this.service.setData(this.index);
    this.mySubject.next(this.index);
  }

}
