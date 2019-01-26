import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.scss']
})
export class BothComponent implements OnInit {

  values: any;
  users: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers('both').subscribe(res => {
        this.values = res;
        this.users = this.values.user;
      }
    );
  }
}

