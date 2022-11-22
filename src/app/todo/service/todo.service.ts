import { Injectable } from '@angular/core';
import { LoggerService } from './../../services/logger.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  /*
  Logger
  Ajouter
  Récupérer
  Supprimer
  */
  logger(): void {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo): boolean {
    this.todos.push(todo);
    return true;
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
