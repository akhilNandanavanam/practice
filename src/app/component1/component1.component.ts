import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnDestroy, OnInit {
  title = 'My App';
  array1 = [1,2,3,4];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.title = 'asdfghj';

    this.activatedRoute.params.subscribe(res=>{
      console.log(res);
      this.array1.forEach(element=>{
        console.log(element);
      });
      this.router.navigate(['']);
      // make http calls and get data using the data above
    });
  }
  ngOnDestroy(){
    // logic over here
  }
  async getData() {
    console.log('before');
    await this.array1.forEach(element => {
      console.log(element);
    });
    console.log('after');
    return true;
  }

}
