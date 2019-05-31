import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTeacherComponent } from './listar-teacher.component';

describe('ListarTeacherComponent', () => {
  let component: ListarTeacherComponent;
  let fixture: ComponentFixture<ListarTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
