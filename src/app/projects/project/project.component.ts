import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data/data.service';
import {Chart} from 'chart.js';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    projects: any;
    myChart: any;
    ps: any;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getProject('all').subscribe(res => {
                this.projects = res;
            }
        );
        this.ps = new PerfectScrollbar('.container.user', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
        const canvas: any = document.getElementById('askLoan');
        const gradient1 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 220);
        gradient1.addColorStop(0, 'rgba(255,204,191, .5)');
        gradient1.addColorStop(1, 'rgba(255,204,191, 0)');
        const gradient2 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 220);
        gradient2.addColorStop(0, 'rgba(151, 253, 165, 0.2)');
        gradient2.addColorStop(1, 'rgba(255,204,191, 0)');
        const gradient3 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 220);
        gradient3.addColorStop(0, 'rgba(151, 233, 253, 0.5)');
        gradient3.addColorStop(1, 'rgba(255,204,191, 0)');
        this.myChart = new Chart('askLoan', {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Demandes (€)',
                        data: [250, 800, 1200, 950, 1505, 4000, 4950, 4700, 5100, 5500, 4620, 5950],
                        lineTension: 0.5,
                        borderColor: 'rgba(151, 253, 165, 0.5)',
                        borderWidth: 2,
                        backgroundColor: gradient2,
                        pointBackgroundColor: 'rgba(151, 253, 165, 0.5)',
                    },
                    {
                        label: 'Financements (€)',
                        data: [250, 800, 1000, 700, 1005, 2000, 3950, 3700, 4100, 4300, 4120, 4950],
                        lineTension: 0.5,
                        borderColor: '#fedcdc',
                        borderWidth: 2,
                        backgroundColor: gradient1,
                        pointBackgroundColor: '#fedcdc',
                    }
                ]
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
        this.myChart = new Chart('numberLoan', {
            type: 'bar',
            data: {
                labels: ['50-99€', '100-199€', '200-299€', '300-399€', '400-499€', '500-599€', '600-699€'],
                datasets: [
                    {
                        label: 'Nombre d\'empruns',
                        data: [25, 51, 75, 120, 89, 56, 12],
                        lineTension: 0.5,
                        borderColor: 'rgba(151, 233, 253, 0.5)',
                        borderWidth: 2,
                        backgroundColor: gradient3,
                        pointBackgroundColor: 'rgba(151, 233, 253, 0.5)',
                    }
                ]
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
                    }],
                }
            }
        });

    }

}
