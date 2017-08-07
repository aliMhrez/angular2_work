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
  constructor( private dataSerive: ItemService) {
    this.items = dataSerive.getItems();
  }

  ngOnInit() {

  }

  validate_name(value: string) {
    const a = value.match('^([^0-9]*)$');
    if (value === '' || a === null || value.length < 3) {
      document.getElementById('error1').hidden = false;
      return false;
    } else {
      document.getElementById('error1').hidden = true;
      return true;
    }
  }

  validate_quantity(value: string) {
    const quantity = parseInt(value, 10);

    if (value === '' || quantity < 1 || quantity > 20) {
      document.getElementById('error2').hidden = false;
      return false;
    } else {
      document.getElementById('error2').hidden = true;
      return true;
    }
  }

  validate_price(value: string) {
    const price = parseInt(value, 10);

    if (value === '' || price < 1) {
      document.getElementById('error3').hidden = false;
      return false;
    } else {
      document.getElementById('error3').hidden = true;
      return true;
    }
  }

  removeItem(item: Item) {
    this.items = this.items.filter(  t => t !== item);

    let new_total: number = 0;

    let val = (<HTMLInputElement>document.getElementById('Total')).value;

    // alert(item);

    new_total = parseInt(val, 10) - (item.price * item.quantity);

    (<HTMLInputElement>document.getElementById('Total')).value = new_total + '';
  }

  addNewItem(name: string, quantity: number, price: number) {
    this.items.push(new Item(name, quantity, price));
  }

  validate(name: string, quant: string, pri: string) {
    const quantity = parseInt(quant, 10);
    const price = parseInt(pri, 10);

    if (this.validate_name(name) && this.validate_quantity(quant) && this.validate_price(pri)) {
      this.addNewItem(name, quantity, price);
      document.getElementById('error1').hidden = true;
      document.getElementById('error2').hidden = true;
      document.getElementById('error3').hidden = true;

      let val = 0;

      for (let item of this.items) {
        val = (item.price * item.quantity) + val;
      }

      (<HTMLInputElement>document.getElementById('Total')).value = val + '';
    }
  }
}
