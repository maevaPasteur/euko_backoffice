import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name : 'translate'
})

export class TranslatePipe implements PipeTransform {
    transform(text) {
        switch (text) {
            case 'waiting':
                return 'en attente';
                break;
            case 'accepted':
                return 'accepté';
                break;
            case 'rejected':
                return 'rejeté';
            case 'unvalid':
                return 'non validé';
            case 'valid':
                return 'validé';
        }
    }
}
