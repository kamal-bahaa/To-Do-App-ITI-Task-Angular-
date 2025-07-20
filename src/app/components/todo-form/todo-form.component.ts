import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})

export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTask = '';

  onAdd() {
    if (this.newTask.trim()) {
      this.addTodo.emit(this.newTask);
      this.newTask = '';
    }
  }
}