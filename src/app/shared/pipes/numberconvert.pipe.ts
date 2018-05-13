import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numberConvert'
})
export class NumberConvertPipe implements PipeTransform {

    transform(value: number, type: string) {
       if (type === 'K') {
        return (value / 1000).toFixed(1) + 'K';
       } else if (type === 'M') {
           return (value / 1000000).toFixed(1) + 'M';
       }
    }
}
