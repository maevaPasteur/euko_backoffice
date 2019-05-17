import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
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

        const canvas: any = document.getElementById('inscriptionChart');
        const gradient1 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 220);
        gradient1.addColorStop(0, 'rgba(255,204,191, .5)');
        gradient1.addColorStop(1, 'rgba(255,204,191, 0)');

        this.myChart = new Chart('inscriptionChart', {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: '',
                    data: [24, 56, 320, 210, 40, 32, 86, 21, 54, 200, 256, 32, 54, 41],
                    lineTension: 0.5,
                    borderColor: '#fedcdc',
                    borderWidth: 2,
                    backgroundColor: gradient1,
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
        this.myChart = new Chart('blablaChart', {
            type: 'doughnut',
            data: {
                labels: ['Investisseurs', 'Emprunteurs', 'Mixtes', 'Neutres'],
                datasets: [{
                    data: [230, 521, 186, 132],
                    backgroundColor: ['#fedcdc', '#97fda5', '#5f78f8', '#e7ebee', '#373737']
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
    }
}
