import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'Euko';
  links: any;

  constructor() { }

  ngOnInit() {
    this.links = document.querySelectorAll('nav a');
  }
  activeLinks(event) {
    for (let i = 0, y = this.links.length; i < y; i++) {
        this.links[i].classList.remove('active');
    }
    event.srcElement.classList.add('active');
  }

}
