import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../services/data/data.service';


@Component({
  selector: 'app-project-kanban',
  templateUrl: './project-kanban.component.html',
  styleUrls: ['./project-kanban.component.scss']
})
export class ProjectKanbanComponent implements OnInit {

    projects: any;

    constructor(private data: DataService) { }


    ngOnInit() {
        this.data.getProject('all').subscribe(res => {
                this.projects = res;
                console.log(this.projects);
            }
        );
    }

}
