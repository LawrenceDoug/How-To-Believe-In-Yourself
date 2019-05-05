import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: 'home', component: Page1Component},
  {path: 'page2', component: Page2Component },
  {path: 'page3', component: Page3Component },
  {path: 'page4', component: Page4Component },
  {path: 'page5', component: Page5Component },
  {path: 'page6', component: Page6Component },
  {path: 'page7', component: Page7Component },
  {path: 'page8', component: Page8Component },
  {path: 'page9', component: Page9Component },
  {path: 'page10', component: Page10Component }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
