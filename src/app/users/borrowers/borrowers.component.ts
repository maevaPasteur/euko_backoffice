import {Component, OnInit} from '@angular/core';

import {DataService} from '../../data.service';
import {ExportService} from '../../export.service';

@Component({
    selector: 'app-borrowers',
    templateUrl: './borrowers.component.html',
    styleUrls: ['./borrowers.component.scss']
})
export class BorrowersComponent implements OnInit {

    values: any;
    users: any;
    private getSum;

    constructor(private data: DataService,
                private excel: ExportService) {
    }

    ngOnInit() {
        this.data.getUsers('borrower').subscribe(res => {
                this.values = res;
                this.users = this.values.user;
            }
        );

        this.getSum = function (loaning: any, type: any, ask: any) {
            let sum = 0;
            let totalRate = 0;
            let mediumRate = 0;
            let numberOffer = 0;

            for (let i = 0; i < loaning.length; i++) {
                if (type === 'all') {
                    sum += loaning[i].sum;
                } else {
                    for (let u = 0; u < loaning[i].offers.length; u++) {
                        if (loaning[i].offers[u].state === type) {
                            numberOffer += 1;
                            totalRate += loaning[i].offers[u].interestRate;
                        }
                    }
                }
            }
            if (sum > 0 && ask === 'sum') {
                return sum + '€';
            }
            if (totalRate > 0 && ask === 'rate') {
                mediumRate = totalRate / numberOffer;
                return mediumRate + '%';
            }
            if (numberOffer > 0 && ask === 'number') {
                return numberOffer;
            }
        };

        this.excel.exportExcel();
    }
}
