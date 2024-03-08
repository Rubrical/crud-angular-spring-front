import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Course } from '../models/course';

export const courseResolver: ResolveFn<Course> = (route, state) => {
  if (route.params && route.params['id']) {
    return inject(CoursesService).findById(route.params['id']);
  }
  return of({_id: '', name: '', category: ''});
};
