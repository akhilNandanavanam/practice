import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component1ModuleRoutingModule } from './component1-module-routing.module';
import { Component1Component } from './component1.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent1Service } from './child-component1/child-component1.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Component1Component,
    ChildComponent1Component
  ],
  imports: [
    CommonModule,
    Component1ModuleRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ChildComponent1Service]
})
export class Component1ModuleModule { }
// use ng generate module component1-module --routing
// routing flag is necessary for lazy loading technique. 