import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model: any = new Model();

  
  
  getName() {
    return this.model.user;
    }

    getTodoItems() {
      return this.model.items.filter(item => !item.done);
    }

    addItem(newItem) {
      if (newItem != "") {
        this.model.items.push(new TodoItem(newItem, false));1
      }
    }

}