import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, input?: any): any {
    if (input) {
        input = input.toLowerCase();
        console.log(value);
        return value.filter(function (el: any) {
            return el.name.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
  }

}
