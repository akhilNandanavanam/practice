import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1ModuleModule } from './component1/component1-module.module';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpComponentComponent } from './http-component/http-component.component';
import { MyHttpInterceptor } from './security/http-inteceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HttpComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1ModuleModule,
    HttpClientModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
  exports : []
})
export class AppModule { }
