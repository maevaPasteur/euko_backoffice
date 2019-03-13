import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

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
