import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page3Component extends AppComponent {
    image = '../assets/images/page3.JPG';
    message = 'Step 2: Find Purpose';
    desc = "Your purpose is what defines you. It gives structure to your life. If you know what you want to do with your life, then living it becomes so much easier. Knowing where you stand and where you plan to go in life makes it more carefree and reduces stress.This in turn makes it 10x easier to find and love yourself.You already know what you want to do in life and your strengths so the only thing left to do is take initiative."
}