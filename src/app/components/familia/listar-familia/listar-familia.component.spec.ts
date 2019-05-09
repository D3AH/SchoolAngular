import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFamiliaComponent } from './listar-familia.component';

describe('ListarFamiliaComponent', () => {
  let component: ListarFamiliaComponent;
  let fixture: ComponentFixture<ListarFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
