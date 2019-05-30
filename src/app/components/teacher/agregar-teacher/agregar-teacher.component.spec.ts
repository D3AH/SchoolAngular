import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTeacherComponent } from './agregar-teacher.component';

describe('AgregarTeacherComponent', () => {
  let component: AgregarTeacherComponent;
  let fixture: ComponentFixture<AgregarTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
