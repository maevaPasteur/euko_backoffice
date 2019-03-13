import {Component, OnInit} from '@angular/core';

import {DataService} from '../../data.service';
import {ExportService} from '../../export.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

    users: any;
    values: any;
    private getSum;

    constructor(private data: DataService,
                private excel: ExportService) {
    }

    ngOnInit() {
        this.data.getUsers('all').subscribe(res => {
                this.values = res;
                this.users = this.values.user;
            }
        );

        this.excel.exportExcel();

        this.getSum = function (val: any) {
            let sum = 0;
            for (let i = 0; i < val.length; i++) {
                sum += val[i].sum;
            }
            if (sum > 0) {
                return sum + '€';
            }
        };
    }
}
