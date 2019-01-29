import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(type) {
    switch (type) {
      case 'borrower':
        return this.http.get('../assets/json/borrowers.json');
        break;
      case 'investissor':
        return this.http.get('../assets/json/investissors.json');
        break;
      case 'both':
        return this.http.get('../assets/json/both.json');
        break;
      case 'neutral':
        return this.http.get('../assets/json/neutrals.json');
        break;
      default :
        return this.http.get('../assets/json/users.json');
    }
  }

  getProject(type) {
    switch (type) {
      case 'all':
        return this.http.get('../assets/json/projets.json');
        break;
      default :
        return this.http.get('https://euko-api-staging.herokuapp.com/projects');
    }
  }

    getWireframe() {
        return this.http.get('../assets/json/screen_app.json');
    }

  exportExcel() {
      $('#btnExport').click(function (e) {
          const postfix = $(this).data('name');
          const a = document.createElement('a');
          const data_type = 'data:application/vnd.ms-excel';
          const table_div = document.getElementById('dvData');
          const table_html = table_div.outerHTML.replace(/ /g, '%20');
          a.href = data_type + ', ' + table_html;
          if (postfix === undefined || postfix === null) {
              a.download = 'euko_tableau.xls';
          } else {
              a.download = 'euko_' + postfix + '.xls';
          }
          a.click();
          e.preventDefault();
      });
  }
}
