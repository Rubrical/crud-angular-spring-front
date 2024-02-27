import { Component } from '@angular/core';
import {Course} from "../models/course";
import { CoursesService } from '../services/courses.service';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
=======
>>>>>>> parent of d9e4b81 (Revert "First service")

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
<<<<<<< HEAD
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list()
    .pipe(catchError(error => {
      this.openError('Erro ao carregar dados')
      return of([]);
    }));
=======
  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
>>>>>>> parent of d9e4b81 (Revert "First service")
  }

  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

}
