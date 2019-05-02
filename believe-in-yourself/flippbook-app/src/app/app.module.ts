import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1.component';
import { Page2Component } from './pages/page2.component';
import { Page3Component } from './pages/page3.component';
import { Page4Component } from './pages/page4.component';
import { Page5Component } from './pages/page5.component';
import { Page6Component } from './pages/page6.component';
import { Page7Component } from './pages/page7.component';
import { Page8Component } from './pages/page8.component';
import { Page9Component } from './pages/page9.component';
import { Page10Component } from './pages/page10.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
