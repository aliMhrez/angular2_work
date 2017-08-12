import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  total: number;
  error1: string;
  error2: string;
  error3: string;
  constructor( private dataSerive: ItemService) {
    this.items = dataSerive.getItems();
    this.total = 0;
    this.error1 = '';
    this.error2 = '';
    this.error3 = '';
  }

  ngOnInit() {

  }

  validate_name(value: string) {
    const a = value.match('^([^0-9]*)$');
    if (value === '' || a === null || value.length < 3) {
      this.error1 = 'At least three characters without numbers';
    } else {
      this.error1 = '';
    }
  }

  validate_quantity(value: string) {
    const quantity = parseInt(value, 10);

    if (value === '' || quantity < 1 || quantity > 20) {
      this.error2 = 'Number between 1 and 20';
    } else {
      this.error2 = '';
    }
  }

  validate_price(value: string) {
    const price = parseInt(value, 10);

    if (value === '' || price < 1) {
      this.error3 = 'Number greater than 1';
    } else {
      this.error3 = '';
    }
  }

  removeItem(item: Item) {
    this.items = this.items.filter(  t => t !== item);

    this.total -= (item.quantity * item.price);
  }

  addNewItem(name: string, quantity: number, price: number) {
    this.items.push(new Item(name, quantity, price));
  }

  validate(name: string, quant: string, pri: string) {
    const quantity = parseInt(quant, 10);
    const price = parseInt(pri, 10);

    if (this.error1 === '' && this.error2 === '' && this.error3 === '' && name !== '') {
      this.addNewItem(name, quantity, price);

      this.total += (price * quantity);
    }
  }
}
