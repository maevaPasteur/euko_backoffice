import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-neutral',
  templateUrl: './neutral.component.html',
  styleUrls: ['./neutral.component.scss']
})
export class NeutralComponent implements OnInit {

  values: any;
  users: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers('neutral').subscribe(res => {
        this.values = res;
        this.users = this.values.user;
      }
    );
  }
}
