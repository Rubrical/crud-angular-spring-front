import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = '/assets/courses-request.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).
    pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
      );

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name: 'angular', category: 'front-end'}
    ];
  }
}
