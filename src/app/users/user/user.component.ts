import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myChart: Chart;

  constructor() { }

  ngOnInit() {

    const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
    const colors = ['#fedcdc', '#97fda5', '#5f78f8', '#e7ebee', '#373737'];
    let values;
    let labels = [];
    let idChart;
    let chartType;
    const that = this;

    $('.chart-container').each( function () {
      values = $(this).data('value');
      idChart = $(this).attr('id');
      chartType = $(this).data('type');

      switch (chartType) {
        case 'line':

          for (let i = 0; i < values.length && i < months.length; i++) {
            labels.push(months[i]);
          }

          that.myChart = new Chart(idChart, {
            type: chartType,
            data: {
              labels: labels,
              datasets: [{
                label: '',
                data: values,
                lineTension: 0.5,
                borderColor: '#fedcdc',
                borderWidth: 2,
                backgroundColor: '#e7ebee',
                pointBackgroundColor: '#fedcdc',
              }]
            },
            options: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
          break;
        case 'doughnut':

          if ( $(this).data('label') === 'users' ) {
            labels = ['Investisseurs', 'Emprunteurs', 'Mixtes', 'Neutres'];
          }

          that.myChart = new Chart(idChart, {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                data: values,
                backgroundColor: colors
              }],
            },
            options: {
              legend: {
                display: false,
              },
              cutoutPercentage: 60,
              title: {
                display: false,
              }
            },
          });
          break;
      }
    });
  }
}
