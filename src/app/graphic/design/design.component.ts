import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {DataService} from '../../data.service';

@Component({
    selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

    timeAsk: any = 1;

    constructor(private data: DataService) {
    }

    ngOnInit() {

        $('.range-slider__range.sumAsk').on('input', function () {
            initInputRange($(this), '.text.sumAsk', 750);
        });

        $('.range-slider__range.timeAsk').on('input', function () {
            initInputRange($(this), '.text.timeAsk', 12);
        });

        function initInputRange(e, p, valueMax) {
            $(p).html(e.val());
            let left = e.val() * (e.width() / valueMax);
            e.closest('.range-slider').find('.line-input').css('left', left);
        }

        // var ps = new PerfectScrollbar('.container');
    }

}
