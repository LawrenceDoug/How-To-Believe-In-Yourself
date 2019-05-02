import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page5Component extends AppComponent {
    image = "../assets/images/page5.JPG";
    message = "Step 4: Build Your Self-Confidence";
    desc = "Now that you have some self-love and self-respect it's time to build off of that. Start gaining more confidence in yourself by doing things that make you feel good and accomplished. Make yourself feel like you're worth more than what you or others once thought."
}