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

//   handleKeyUp(ev) {
//     if (ev.which === 13){
//       this.addNewTask(ev.target.value);
//       ev.target.value = ''
//     }
//   }
}
