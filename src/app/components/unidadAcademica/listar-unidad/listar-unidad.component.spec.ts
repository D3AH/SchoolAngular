import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadComponent } from './listar-unidad.component';

describe('ListarUnidadComponent', () => {
  let component: ListarUnidadComponent;
  let fixture: ComponentFixture<ListarUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
