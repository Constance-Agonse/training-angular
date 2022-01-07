import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((results) => {
      this.todos = results;
      console.log('JSON Response = ', JSON.stringify(results));
    });
  }

  // ngOnInit(): void {
  //   this.buttonText = 'Oh snap!';
  //   const faceSnapId = +this.route.snapshot.params['id'];
  //   this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  // }
}
