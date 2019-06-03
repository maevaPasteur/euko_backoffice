import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data/data.service';

@Component({
    selector: 'app-neutral',
    templateUrl: './neutral.component.html',
    styleUrls: ['./neutral.component.scss']
})
export class NeutralComponent implements OnInit {

    values: any;
    users: any;
    deletePopin: any;
    userDelete: any;


    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getUsers('neutral').subscribe(res => {
                this.values = res;
                this.users = this.values.user;
            }
        );
        this.deletePopin = document.querySelector('.delete-popin');
    }

    openDeletePopin(name) {
        this.userDelete = name;
        this.deletePopin.classList.remove('hide');
    }

    closeDeletePopin() {
        this.deletePopin.classList.add('hide');
    }
}
