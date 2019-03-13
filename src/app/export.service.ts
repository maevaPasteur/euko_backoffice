import {Injectable} from '@angular/core';
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class ExportService {

    constructor() {
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
