import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInstructorCursoComponent } from './agregar-instructor-curso.component';

describe('AgregarInstructorCursoComponent', () => {
  let component: AgregarInstructorCursoComponent;
  let fixture: ComponentFixture<AgregarInstructorCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInstructorCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInstructorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
