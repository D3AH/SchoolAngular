import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRedComponent } from './agregar-red.component';

describe('AgregarRedComponent', () => {
  let component: AgregarRedComponent;
  let fixture: ComponentFixture<AgregarRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
