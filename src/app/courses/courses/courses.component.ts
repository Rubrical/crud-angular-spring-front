import { Component } from '@angular/core';
import {Course} from "../models/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[];
  displayedColumns: string[];

  constructor() {
    this.courses = [
      {_id: '1', name: 'angular', category: 'front-end'}
    ];
    this.displayedColumns = ['name', 'category'];
  }
}
