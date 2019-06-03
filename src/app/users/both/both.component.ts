import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data/data.service';
import {ExportService} from '../../services/export/export.service';

@Component({
    selector: 'app-both',
    templateUrl: './both.component.html',
    styleUrls: ['./both.component.scss']
})
export class BothComponent implements OnInit {

    values: any;
    users: any;
    deletePopin: any;
    userDelete: any;

    constructor(private data: DataService,
                private excel: ExportService) {
    }

    ngOnInit() {
        this.data.getUsers('all').subscribe(res => {
                this.values = res;
                const mix = [];
                for (let i = 0; i < this.values.length; i++) {
                    if (this.values[i].projects.length > 0 && this.values[i].offers.length > 0) {
                        mix.push(this.values[i]);
                    }
                }
                this.users = mix;
            }
        );
        this.deletePopin = document.querySelector('.delete-popin');
    }

    exportExcel(name) {
        ExportService.exportExcel(name);
    }

    openDeletePopin(name) {
        this.userDelete = name;
        this.deletePopin.classList.remove('hide');
    }

    closeDeletePopin() {
        this.deletePopin.classList.add('hide');
    }
}

