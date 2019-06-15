import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJornadaSeccionComponent } from './listar-jornada-seccion.component';

describe('ListarJornadaSeccionComponent', () => {
  let component: ListarJornadaSeccionComponent;
  let fixture: ComponentFixture<ListarJornadaSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarJornadaSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJornadaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
