import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page8Component extends AppComponent {
    image = "../assets/images/page8.jpg";
    message = "Step 7: Strive to Complete Those Goals Even If They're Impossible";
    desc = "Completing goals that you thought were impossible is a great confidence booster. It also helps improve discipline, motivation, and the respect you have for yourself. However, you should always set realistic goals because it very well may always be impossible to acheive ultra unrealistic goals you set for yourself. For example, planning to donate 10 million dollars to a charity within a month's time will most likely be impossible to achieve. One the other hand, setting a 1 million dollar charity donation goal within a month may seem impossible but could be very doable if you put your mind to it. And...had the right connections lol"
}