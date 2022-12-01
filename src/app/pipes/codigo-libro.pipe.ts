import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoLibro'
})
export class CodigoLibroPipe implements PipeTransform {

  transform(value: string): string {
    let result : string;
    result = "Ref-" + value
    return result;
  }

}
