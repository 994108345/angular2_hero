import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule   //浏览器模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
