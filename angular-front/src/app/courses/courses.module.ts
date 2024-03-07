import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CoursesTableListComponent } from './courses-table-list/courses-table-list.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesTableListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
