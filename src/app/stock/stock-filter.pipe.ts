import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keywork: string): any {
    console.log(list);

    if (!field || !keywork) {
      return list;
    }

    return list.filter( item => {
      const itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keywork) >= 0;
    });

  }

}
