import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title: string = 'Euko';

  constructor() { }

  ngOnInit() {

    const navLine: any = $('.nav .line');
    const navLink = $('.nav a');
    let hNavLine: any;
    let pNavLine: any;

    resizeNavLine();

    navLink.click( function () {
      navLink.removeClass('active');
      $(this).addClass('active');
      resizeNavLine();
    });

    navLink.hover(function () {
      navLine.css('height', $(this).height());
      navLine.offset({ top: $(this).offset().top});
    });

    $('.list-menu').mouseleave( function () {
      resizeNavLine();
    });

    function resizeNavLine() {
      hNavLine = $('.nav a.active').height();
      pNavLine = $('.nav a.active').offset().top;
      navLine.css('height', hNavLine);
      navLine.offset({ top: pNavLine});
    }

  }

}
