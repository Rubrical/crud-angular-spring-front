import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).
    pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
      );
  }

  save(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }

  findById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }
}
