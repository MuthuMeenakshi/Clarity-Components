import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegLoginComponent } from './student-reg-login.component';

describe('StudentRegLoginComponent', () => {
  let component: StudentRegLoginComponent;
  let fixture: ComponentFixture<StudentRegLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
