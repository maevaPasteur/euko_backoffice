import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name : 'age'
})

export class AgePipe implements PipeTransform {
    transform(base): number {
        const date = base.split('/');
        const today = new Date();
        let age = today.getFullYear() - date[2];

        if (date[1] < (today.getMonth() + 1)) {
            age -= 1;
        }
        if (date[1] === (today.getMonth() + 1) && date[0] < today.getDate()) {
            age -= 1;
        }
        return age;
    }
}
