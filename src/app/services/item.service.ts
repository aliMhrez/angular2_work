import { Injectable } from '@angular/core';
import { Item } from '../Item';
@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
    const items: Item[] = [];
    return items;
  }

}
