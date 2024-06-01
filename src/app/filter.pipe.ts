import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

  transform(value: any, serachvalue: string) {
    if (!Array.isArray(value)) {
      return [];
    }
    return value.filter(function(ele:any){
      return ele.ework.indexOf(serachvalue) > -1
    });
  }
  
}
