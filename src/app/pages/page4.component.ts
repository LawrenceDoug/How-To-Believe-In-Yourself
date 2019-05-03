import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-root',
    templateUrl: '../block.component.html',
    styleUrls: ['../app.component.css'],
})

export class Page4Component extends AppComponent {
    image = "../assets/images/page4.jpg";
    message = "Step 3: Eliminate Words Like CAN'T, NEVER, and IMPOSSIBLE";
    desc = "\"NEVER SAY NEVER!\" Stop saying things like \"I can't\", \"That will never happen\", or \"This is impossible\" because phrases like that block you from actually achieving the things you want to achieve.It's a mental block that hinders progress, and can be easily broken if you just believe it can.This life is all a mind game that is very easy to play once you master the tools given to you.It's not a matter of you can't do it, it's more along the lines of you think you can't do it."
}