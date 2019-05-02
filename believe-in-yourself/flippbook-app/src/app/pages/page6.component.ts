import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page6Component extends AppComponent {
    image = "../assets/images/page6.jpg";
    message = "Step 5: Develop Discipline";
    desc = "In order to get things done you must develop some discipline. Start living a routine and only reward yourself when you accomplish goals. Live a life that allows for more freedom and flexibility. Save money so that you're more financially sound or exercise so that you feel better when doing daily activities. Just protect yourself from undergoing anymore stress by developing a more secure, self-rewarding lifestyle."
}