import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data/data.service';
import {ExportService} from '../../services/export/export.service';

@Component({
    selector: 'app-investors',
    templateUrl: './investors.component.html',
    styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {

    values: any;
    users: any;
    private getSum;

    constructor(private data: DataService,
                private excel: ExportService) {
    }

    ngOnInit() {
        this.data.getUsers('investissor').subscribe(res => {
                this.values = res;
                this.users = this.values.user;
                console.log(this.users);
            }
        );

        this.excel.exportExcel();

        this.getSum = function (investment: any, type: any, ask: any) {
            let sum = 0;
            let totalRate = 0;
            let mediumRate = 0;
            let numberOffer = 0;

            for (let i = 0; i < investment.length; i++) {
                if (investment[i].state === type) {
                    numberOffer += 1;
                    sum += investment[i].sum;
                    totalRate += investment[i].interestRate;
                }
            }
            if (sum > 0 && ask === 'sum') {
                return sum + '€';
            }
            if (sum > 0 && ask === 'rate') {
                mediumRate = totalRate / numberOffer;
                return mediumRate + '%';
            }
            if (sum > 0 && ask === 'number') {
                return numberOffer;
            }
        };
    }
}
