import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';

export const courseResolver: ResolveFn<void> = (route, state) => {
  if (route.params && route.params['id']) {
    return inject(CoursesService).findById(route.params['id'])
  }
};
