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
        this.data.getUsers('all').subscribe(res => {
                this.values = res;
                const mix = [];
                for (let i = 0; i < this.values.length; i++) {
                    if (this.values[i].offers.length > 0) {
                        mix.push(this.values[i]);
                    }
                }
                this.users = mix;
            }
        );
        this.excel.exportExcel();
    }
}
