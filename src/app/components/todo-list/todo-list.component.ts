import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: { task: string; completed: boolean }[] = [];
  @Output() onToggle = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  handleToggle(index: number) {
    this.onToggle.emit(index);
  }

  handleDelete(index: number) {
    this.onDelete.emit(index);
  }
}