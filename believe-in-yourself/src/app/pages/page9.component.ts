import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page9Component extends AppComponent {
    image = "../assets/images/page9.jpg";
    message = "Step 8: Reward Yourself For All Your Hard Work";
    desc = "Once you complete your goals you can reward your self accordingly. Go out to a bar to celebrate finishing a project with your friends or eat that chocolate cake you've been saving after you complete your nutrition goal for the month. Once you complete em you can delete em lol. Seriously though, go treat yoself!"
}