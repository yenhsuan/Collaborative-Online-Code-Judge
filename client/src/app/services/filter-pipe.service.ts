import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
@Pipe({
    name: 'FilterPipeService',
})
export class FilterPipeService implements PipeTransform {

  constructor() { }

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter((el: any)=>{
            return el.toLowerCase().indexOf(input) != -1;
        });
    }
    return value;
   }

}
