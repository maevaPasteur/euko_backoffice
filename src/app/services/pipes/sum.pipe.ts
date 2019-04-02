import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name : 'sum'
})

export class SumPipe implements PipeTransform {
    transform(data: any, arg1: any, arg2: any): number {
        let sum = 0;
        for ( let i = 0; i < data[arg1].length; i++ ) {
            if (arg1 === 'offers') {
                if (data[arg1][i].state === arg2) {
                    sum += data[arg1][i].project.price;
                }
            } else if (arg1 === 'projects') {
                for (let y = 0; y < data[arg1][i].offers.length; y++ ) {
                    if (data[arg1][i].offers[y].state === arg2) {
                        sum += data[arg1][i].price;
                    }
                }
            }
        }
        if (sum > 0) {
            return sum;
        }
    }
}
