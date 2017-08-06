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
  }

  addNewItem(name: string, quantity: number, price: number) {
    this.items.push(new Item(name, quantity, price));
  }

  validate(name: string, quantity: number, price: number) {
    const a = name.match('^([^0-9]*)$');

    if (a === null || name.length < 3) {
      document.getElementById('error1').hidden = false;
    } else if (quantity < 0 || quantity > 20) {
      document.getElementById('error2').hidden = false;
    } else if (price < 0) {
      document.getElementById('error3').hidden = false;
    } else {
      this.addNewItem(name, quantity, price);
      document.getElementById('error1').hidden = true;
      document.getElementById('error2').hidden = true;
      document.getElementById('error3').hidden = true;
    }
  }

//   handleKeyUp(ev) {
//     if (ev.which === 13){
//       this.addNewTask(ev.target.value);
//       ev.target.value = ''
//     }
//   }
}
