import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-root',
  templateUrl: '../block.component.html',
  styleUrls: ['../app.component.css'],
})

export class Page2Component extends AppComponent {
  image = '../assets/images/page2.JPG';
  message = 'Step 1: Learn to Love Yourself';
  desc = "This is the most important step in the entire process. It's a really simple skill yet very hard for most people to master. In order to love yourself, you must focus on being happy. Happiness brings out the best in us. If you don't have a happy life you're more likely to start hating life and yourself as a result. Do what makes you most excited to be alive, surround yourself around people that bring joy to your life, and find and learn to understand yourself. Find out what makes you enjoy these things so much? Maybe that'll help you find out why you're always so down. You could also just have depression which is another can of worms I don't want to open right now. "
}