import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'learn/:id', component: Component1Component },
  { path: 'learn/:id', loadChildren: './component1/component1-module.module#Component1ModuleModule' },
  // { path: '**', component: Component1Component },
];
//localhost:4200/learn/1/component1/etc

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
