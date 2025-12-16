import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusculas',
})
export class MinusculasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
