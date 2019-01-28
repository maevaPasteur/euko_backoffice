import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'Euko';

  constructor() { }

  ngOnInit() {

    const navLine: any = $('.nav .line');
    const navLink = $('.nav a');

    navLink.click( function () {
      navLink.removeClass('active');
      $(this).addClass('active');
    });
  }

}
