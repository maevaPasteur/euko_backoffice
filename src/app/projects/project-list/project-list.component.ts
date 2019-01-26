import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

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
