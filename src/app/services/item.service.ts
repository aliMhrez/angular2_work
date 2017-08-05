import { Injectable } from '@angular/core';
import { Item } from '../Item';
@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
    const items: Item[] = [];

    items.push(new Item('sugar', 1, 2));
    return items;
  }

}
