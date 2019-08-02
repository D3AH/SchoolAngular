import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJornadaSeccionComponent } from './agregar-jornada-seccion.component';

describe('AgregarJornadaSeccionComponent', () => {
  let component: AgregarJornadaSeccionComponent;
  let fixture: ComponentFixture<AgregarJornadaSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarJornadaSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJornadaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
