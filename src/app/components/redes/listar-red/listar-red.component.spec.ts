import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRedComponent } from './listar-red.component';

describe('ListarRedComponent', () => {
  let component: ListarRedComponent;
  let fixture: ComponentFixture<ListarRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
