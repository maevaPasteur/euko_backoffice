import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sum'
})

export class SumPipe implements PipeTransform {
    transform(data: any, arg1: any, arg2: any, arg3: any): number {
        let sum = 0;
        let percTot = 0;
        let percNum = 0;

        for (let i = 0; i < data[arg1].length; i++) {
            if (arg1 === 'offers') {
                if (data[arg1][i].state === arg2) {
                    switch (arg3) {
                        case 'num' :
                            sum += 1;
                            break;
                        case 'sum' :
                            sum += data[arg1][i].project.price;
                            break;
                        case 'perc' :
                            percTot += data[arg1][i].project.interests;
                            percNum += 1;
                            sum = percTot / percNum;
                    }
                } else if (arg2 === 'ask') {
                    switch (arg3) {
                        case 'num' :
                            sum += 1;
                            break;
                        case 'sum' :
                            sum += data[arg1][i].project.price;
                    }
                }
            } else if (arg1 === 'projects') {
                for (let y = 0; y < data[arg1][i].offers.length; y++ ) {
                    if (data[arg1][i].offers[y].state === arg2) {
                        switch (arg3) {
                            case 'sum' :
                                sum += data[arg1][i].price;
                                break;
                            case 'num' :
                                sum += 1;
                                break;
                            case 'perc' :
                                percTot += data[arg1][i].offers[y].interests;
                                percNum += 1;
                                sum = percTot / percNum;
                        }
                    } else if (arg2 === 'ask') {
                        switch (arg3) {
                            case 'num' :
                                sum += 1;
                                break;
                            case 'sum' :
                                sum += data[arg1][i].price;
                        }
                    }
                }
            }
        }
        if (sum > 0) {
            switch (arg3) {
                case 'num' :
                    return sum;
                    break;
                case 'sum' :
                    return sum;
                    break;
                case 'perc' :
                    return sum;
            }
        }
    }
}
