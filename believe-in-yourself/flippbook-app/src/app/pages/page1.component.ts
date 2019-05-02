import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page1Component extends AppComponent {
    image = '../assets/images/page1.JPG';
    message = 'How to Believe in Yourself - The Online Flipbook';
    desc = "It's very simple and easy to just believe in oneself, so why is it so hard for people to do it. Could just be a lack of motivation, a lack of self-confidence, or a lack of self-respect. Could even be a combination of all 3. If you suffer from this issue, I want to help. Through this flipbook I'll do just that; I will help you believe in yourself."
}