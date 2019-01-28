import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../data.service';
import {usesServiceWorker} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/service-worker";

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.scss']
})
export class BothComponent implements OnInit {

  values: any;
  users: any;
  private getSum;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers('both').subscribe(res => {
        this.values = res;
        this.users = this.values.user;
      }
    );

      this.data.exportExcel();

      this.getSum = function (user: any, type: any, ask: any ) {
          let sum = 0;
          let numberOffer = 0;
          let totalRate = 0;
          let mediumRate = 0;

          // console.log(user);

          for (let i = 0; i < user.length; i++) {

              if (user[i].offers) {
                  if (type === 'ask') {
                    sum += user[i].sum;
                  } else if (type === 'accept') {
                      for (let j = 0; j < user[i].offers.length; j++) {
                          if (user[i].offers[j].state === 'accept') {
                              totalRate += user[i].offers[j].interestRate;
                              sum += user[i].sum;
                              numberOffer += 1;
                          }
                      }
                  }
              } else {
                  if (user[i].state === type) {
                      numberOffer += 1;
                      sum += user[i].sum;
                      totalRate += user[i].interestRate;
                  }
              }
          }


          if (sum > 0 && ask === 'sum') {
              return sum + '€';
          }
          if (totalRate > 0 && ask === 'rate') {
              mediumRate = Math.round((totalRate / numberOffer) * 10) / 10;
              return mediumRate + '%';
          }
          if (sum > 0 && ask === 'number') {
              return numberOffer;
          }
      };
  }
}

