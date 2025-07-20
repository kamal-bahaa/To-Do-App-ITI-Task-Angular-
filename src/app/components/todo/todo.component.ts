import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent {
  todos: { task: string; completed: boolean }[] = [];

  addTodo(task: string) {
    if (task.trim()) {
      this.todos.push({ task, completed: false });
    }
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed; 
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}