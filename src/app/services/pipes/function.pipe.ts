import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name : 'function'
})

export class FunctionPipe implements PipeTransform {
    transform(base) {
        const user = base;
        if (user.offers.length === 0 && user.projects.length === 0) {
            return 'Neutre';
        } else if (user.offers.length > 0 && user.projects.length === 0) {
            return 'Investisseur';
        } else if (user.offers.length === 0 && user.projects.length > 0) {
            return 'Emprunteur';
        } else {
            return 'Mix';
        }
    }
}
