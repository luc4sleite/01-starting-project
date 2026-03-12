import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksSerive = inject(TasksService);

  onCompleteTask() {
    this.tasksSerive.removeTask(this.task.id);
  }

}
