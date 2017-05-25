import { Pipe } from '@angular/core';

import { Drink } from '../drinks/drink';

@Pipe({
  name: 'hasDrinkName'
})
export class HasDrinkNamePipe {
  transform(value: Drink[], searchTerm: string) {
    if (!searchTerm || !value) { return value; }
    return value.filter((item: Drink) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
