import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-table-list',
  templateUrl: './courses-table-list.component.html',
  styleUrl: './courses-table-list.component.scss'
})
export class CoursesTableListComponent {

  @Input()
  courses: Course[] = [];
  @Output()
  add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(

  ) { }

  onAdd() {
    this.add.emit(true);
  }
}
