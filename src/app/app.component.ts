import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private router: Router) { }

  links = [{
    linkname: 'Home',
    actuallink: '/'
  },
  {
    linkname: 'Step 1',
    actuallink: '/page2'
  },
  {
    linkname: 'Step 2',
    actuallink: '/page3'
  },
  {
    linkname: 'Step 3',
    actuallink: '/page4'
  },
  {
    linkname: 'Step 4',
    actuallink: '/page5'
  },
  {
    linkname: 'Step 5',
    actuallink: '/page6'
  },
  {
    linkname: 'Step 6',
    actuallink: '/page7'
  },
  {
    linkname: 'Step 7',
    actuallink: '/page8'
  },
  {
    linkname: 'Step 8',
    actuallink: '/page9'
  },
  {
    linkname: 'Step 9',
    actuallink: '/page10'
  }
  ]

  changePage = function (num) {
    if (num == -1 && !location.href.includes('/page')) {
      this.router.navigate(['./page10']);
    }
    else if (num == -1 && location.href.includes('/page2')) {
      this.router.navigate(['/'])
    }
    else if (num == -1 && location.href.includes('/page10')) {
      this.router.navigate(['page9']);
    }
    else if (num == 1 && !location.href.includes('/page')) {
      this.router.navigate(['page2']);
    }
    else if (num == 1 && location.href.includes('/page10')) {
      this.router.navigate(['/']);
    }
    else if (num == 1) {
      var pageNumber = parseInt(location.href.slice(-1), 10);
      var newPageNumber = pageNumber + num;
      console.log(pageNumber);
      this.router.navigate([`/page${newPageNumber}`]);
    }
    else if (num == -1) {
      var pageNumber = parseInt(location.href.slice(-1), 10);
      var newPageNumber = pageNumber + num;
      this.router.navigate([`/page${newPageNumber}`]);
    }
  };
}


