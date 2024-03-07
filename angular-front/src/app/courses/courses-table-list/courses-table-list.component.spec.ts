import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTableListComponent } from './courses-table-list.component';

describe('CoursesTableListComponent', () => {
  let component: CoursesTableListComponent;
  let fixture: ComponentFixture<CoursesTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesTableListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
