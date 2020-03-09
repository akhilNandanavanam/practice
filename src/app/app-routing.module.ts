import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { AppComponent } from './app.component';
import { HttpComponentComponent } from './http-component/http-component.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'learn/:id', component: Component1Component },
  { path: 'learn/:id', loadChildren: './component1/component1-module.module#Component1ModuleModule' },
  { path: 'sample-http', component: HttpComponentComponent },
  // { path: '**', component: Component1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
