import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlevelComponent } from './afterlevel.component';

describe('AfterlevelComponent', () => {
  let component: AfterlevelComponent;
  let fixture: ComponentFixture<AfterlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
