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

//   completeAll(checked:boolean) {
//     this.tasks.forEach( task => task.setCompleted(checked))
//   }

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
    const a = name.match('^([^0-9]*)$');
    // alert(name);
    // alert(quantity === '');
    // alert(price);

    if (name === '') {
      document.getElementById('error1').hidden = false;
      return;
    } else {
      document.getElementById('error1').hidden = true;
    }

    if (quant === '') {
      document.getElementById('error2').hidden = false;
      return;
    } else {
      document.getElementById('error2').hidden = true;
    }

    if (pri === '') {
      document.getElementById('error3').hidden = false;
      return;
    } else {
      document.getElementById('error3').hidden = true;
    }

    const quantity = parseInt(quant, 10);
    const price = parseInt(pri, 10);

    let bool = true;

    if (a === null || name.length < 3) {
      document.getElementById('error1').hidden = false;
      bool = false;
    }

    if (quantity < 1 || quantity > 20) {
      document.getElementById('error2').hidden = false;
      bool = false;
    }

    if (price < 1) {
      document.getElementById('error3').hidden = false;
      bool = false;
    }

    if (bool) {
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

//   handleKeyUp(ev) {
//     if (ev.which === 13){
//       this.addNewTask(ev.target.value);
//       ev.target.value = ''
//     }
//   }
}
