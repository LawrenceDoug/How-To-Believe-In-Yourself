import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page7Component extends AppComponent {
    image = "../assets/images/page7.jpg";
    message = "Step 6: Set Goals For Yourself";
    desc = "Set goals so that they can be accomplished. It's always a good feeling when you do something you said you were going to do. That feeling of pure dopamine you get from completing tasks will feel good. You'll feel better and better each time you do it. In turn it will boost your confidence, self-respect, and motivation."
}