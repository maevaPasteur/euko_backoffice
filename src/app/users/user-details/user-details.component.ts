import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute, private data: DataService) {
    }

    ps: any;
    user: any;
    deletePopin: any;
    userDelete;

    ngOnInit() {
        let id: any = this.route.snapshot.paramMap.get('id');
        id = id.replace(/\D/g, '');
        this.data.getUsers('all').subscribe(res => {
                const users: any = res;
                this.user = users.find(c => c.id === id);
                this.userDelete = this.user.firstname;
            }
        );
        this.ps = new PerfectScrollbar('.user-details', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
        this.deletePopin = document.querySelector('.delete-popin');
    }

    openDeletePopin(name) {
        this.deletePopin.classList.remove('hide');
    }

    closeDeletePopin() {
        this.deletePopin.classList.add('hide');
    }
}
