import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleStudentComponent } from './admin-single-student.component';

describe('AdminSingleStudentComponent', () => {
  let component: AdminSingleStudentComponent;
  let fixture: ComponentFixture<AdminSingleStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
