import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamwishesComponent } from './examwishes.component';

describe('ExamwishesComponent', () => {
  let component: ExamwishesComponent;
  let fixture: ComponentFixture<ExamwishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamwishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamwishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
