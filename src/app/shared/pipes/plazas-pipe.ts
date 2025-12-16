import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plazas',
})
export class PlazasPipe implements PipeTransform {

  transform(value: string): string {
    if (value === '1') {
      return `${value} plaza de garaje`;
    }else if (value === '0') {
      return `Sin plaza de garaje`;
    }else{
      return `${value} plazas de garaje`;
    }
  }

}
