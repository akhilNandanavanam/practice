import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1ModuleModule } from './component1/component1-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1ModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : []
})
export class AppModule { }
