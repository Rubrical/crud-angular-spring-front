import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-table-list',
  templateUrl: './courses-table-list.component.html',
  styleUrl: './courses-table-list.component.scss'
})
export class CoursesTableListComponent {

  @Input()
  courses: Course[] = [];
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute})
  }
}
