import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../services/data/data.service';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.scss']
})
export class WireframeComponent implements OnInit {

  wireframes: any;
  images: any;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getWireframe().subscribe(res => {
              this.wireframes = res;
              this.images = this.wireframes.images;
              console.log(this.images);
          }
      );

      const ps = new PerfectScrollbar('.container', {
          wheelSpeed: 2,
          wheelPropagation: true,
          minScrollbarLength: 20
      });
  }

}
