import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data/data.service';
import {ExportService} from '../../services/export/export.service';

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
                this.users = res;
            }
        );
    }

    exportExcel(name) {
        ExportService.exportExcel(name);
    }
}
