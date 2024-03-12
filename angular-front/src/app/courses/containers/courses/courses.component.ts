import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]> | null = null;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.fecthData();
  }

  fecthData() {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.openError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute})
  }

  onEdit(course: Course) {
      this.router.navigate(['edit', course._id], { relativeTo: this.activatedRoute})
  }

  onRemove(course: Course) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Remover curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.coursesService.remove(course._id).subscribe(
          () => {
            this.fecthData();
            this.snackBar.open('Curso deletado', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }, () => { this.openError("Erro ao remover curso")}
        );
      }
    });
  }

}
