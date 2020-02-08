import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';


const routes: Routes = [
  { path: '', component: Component1Component},
  { path: 'child', component: ChildComponent1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Component1ModuleRoutingModule { }
