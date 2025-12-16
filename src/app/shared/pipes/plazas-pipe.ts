import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plazas',
})
export class PlazasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
