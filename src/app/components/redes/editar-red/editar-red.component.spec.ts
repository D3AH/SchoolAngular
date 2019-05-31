import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRedComponent } from './editar-red.component';

describe('EditarRedComponent', () => {
  let component: EditarRedComponent;
  let fixture: ComponentFixture<EditarRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
