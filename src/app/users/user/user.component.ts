import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import * as $ from 'jquery';
import {Chart} from 'chart.js';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    myChart: any;
    ps: any;
    usersQtt: any;
    borrowers = 0;
    investors = 0;
    mixtes = 0;
    neutrals = 0;
    hoverMap;
    usersObj;

    constructor(private data: DataService) {
    }

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    ngOnInit() {
        this.ps = new PerfectScrollbar('.container.user', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });

        let users;
        this.usersQtt = 0;
        const usersList = [];
        const mapData = {};
        const mapFr = $('#mapFr');
        const mapPaths = mapFr.find('path');

        this.usersObj = {
            'mixtes': [],
            'borrowers': [],
            'investors': [],
            'neutrals': [],
            'all': []
        };

        this.data.getUsers('all').subscribe(res => {
                users = res;
                this.usersQtt = users.length;
                for (let i = 0; i < this.usersQtt; i++) {
                    let newValue = users[i].postal;
                    newValue = newValue.slice(0, 2);
                    usersList.push(newValue);
                    this.usersObj['all'].push(newValue);
                    if (users[i].projects.length > 0 && users[i].offers.length > 0) {
                        this.mixtes += 1;
                        this.usersObj['mixtes'].push(newValue);
                    } else if (users[i].projects.length > 0 && users[i].offers.length === 0) {
                        this.borrowers += 1;
                        this.usersObj['borrowers'].push(newValue);
                    } else if (users[i].projects.length === 0 && users[i].offers.length > 0) {
                        this.investors += 1;
                        this.usersObj['investors'].push(newValue);
                    } else {
                        this.neutrals += 1;
                        this.usersObj['neutrals'].push(newValue);
                    }
                }
                this.hoverMap('all');
                for (let i = 0; i < usersList.length; i++) {
                    if (mapData[usersList[i]] === undefined) {
                        Object.defineProperty(mapData, usersList[i], {
                            value: 1,
                            writable: true
                        });
                        mapFr.find('path[data-num=' + usersList[i] + ']').removeClass().addClass('users');
                    } else {
                        mapData[usersList[i]] += 1;
                    }
                }
            }
        );

        this.hoverMap = function (e) {
            if (e === 'all') {
                mapFr.find('path').removeClass();
            }
        };

        const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
        const colors = ['#fedcdc', '#97fda5', '#5f78f8', '#e7ebee', '#373737'];
        let values;
        let labels = [];
        let idChart;
        let chartType;
        const that = this;
        $('.chart-container').each(function () {
            values = $(this).data('value');
            idChart = $(this).attr('id');
            chartType = $(this).data('type');
            switch (chartType) {
                case 'line':
                    for (let i = 0, vl = values.length, ml = months.length; i < vl && i < ml; i++) {
                        labels.push(months[i]);
                    }
                    const canvas: any = document.getElementById('inscriptionChart');
                    const gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 220);
                    gradient.addColorStop(0, 'rgba(255,204,191, .5');
                    gradient.addColorStop(1, 'rgba(255,204,191, 0');
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
                                backgroundColor: gradient,
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
                    if (String($(this).data('label')) === 'users') {
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
                            cutoutPercentage: 90,
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
