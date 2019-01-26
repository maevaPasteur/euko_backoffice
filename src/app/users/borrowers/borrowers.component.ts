import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.scss']
})
export class BorrowersComponent implements OnInit {

  values: any;
  users: any;
  private getSum;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers('borrower').subscribe(res => {
        this.values = res;
        this.users = this.values.user;
      }
    );
  }
}
