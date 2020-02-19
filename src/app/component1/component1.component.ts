import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnDestroy, OnInit {
  title = 'My App';
  array1 = [1,2,3,4];
  myField1: FormControl;
  numberForm: FormControl;
  selectBoxForm: FormControl;
  options : Array<string>;
  formValue: string;
  InputError: string;
  isError: boolean;
  VALIDATION_ERROR_REQUIRED_TXT: string = "Please enter a Value";
  VALIDATION_MIN_LENGTH: string = "Please enter a Correct Value";

  // FormControl -> FormGroup -> FormArray
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.options = ['Akhil', 'Pratyusha', 'Scooby Doo'];
    // this.formValue = 'Akhil'
    this.title = 'asdfghj';
    this.numberForm = new FormControl(null);
    this.selectBoxForm = new FormControl(null);
    this.myField1 = new FormControl(null, Validators.required);
    // this.activatedRoute.params.subscribe(res=>{
    //   console.log(res);
    //   this.array1.forEach(element=>{
    //     console.log(element);
    //   });
    //   this.router.navigate(['']);
    //   // make http calls and get data using the data above
    // });

  }
  ngOnDestroy(){
    // logic over here
  }
  // async getData() {
  //   console.log('before');
  //   await this.array1.forEach(element => {
  //     console.log(element);
  //   });
  //   console.log('after');
  //   return true;
  // }
  showFormValue(name: string){
    console.log('Text Field Value---->', this.myField1.value);
    console.log('Number Field Value---->', this.numberForm.value);
    console.log('Select Field Value---->', this.selectBoxForm.value);
    // if(this.myField1.valid){
    //   this.isError = false;
    //   this.InputError = null;
    //   this.formValue = this.myField1.value;
    // } else {
    //   this.isError = true;
    //   this.InputError = this.VALIDATION_ERROR_REQUIRED_TXT;
    // }
  }
}
