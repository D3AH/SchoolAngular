import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUnidadComponent } from './agregar-unidad.component';

describe('AgregarUnidadComponent', () => {
  let component: AgregarUnidadComponent;
  let fixture: ComponentFixture<AgregarUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
